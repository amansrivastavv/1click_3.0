import { API_CONFIG } from "./config";
import { storage } from "./storage";
import { ApiResponse } from "./types";

/**
 * RequestConfig
 * Configuration options for API requests
 */
interface RequestConfig {
  requiresAuth?: boolean; // Does this request need token?
  customHeaders?: Record<string, string>; // Additional headers
}

class ApiClient {
  private baseURL: string; // Store base URL

  /**
   * Constructor - runs when creating new ApiClient
   * @param baseURL - Base URL of API
   */
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Build headers for request
   * WHAT IT DOES:
   * - Adds Content-Type header
   * - Adds Authorization header (if token exists)
   * - Adds any custom headers
   *
   * @param customHeaders - Optional custom headers
   * @param requiresAuth - Should we add token?
   * @returns Headers object
   */
  private getHeaders(
    customHeaders?: Record<string, string>,
    requiresAuth = true
  ): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json", // Tell API we're sending JSON
      ...customHeaders, // Spread custom headers
    };

    if (requiresAuth) {
      const token = storage.getToken();
      if (token) {

        headers["customAuthorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  /**
   * Handle API response
   * WHAT IT DOES:
   * - Converts response to JSON
   * - Checks if request was successful
   * - Returns standardized response
   *
   * @param response - Fetch API response object
   * @returns Standardized ApiResponse
   */
  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    // 1. Check for success status codes that might have no content (204 No Content)
    if (response.status === 204) {
      return { status: "success", message: "Success" } as any;
    }

    const text = await response.text(); // Read text first to debug

    try {
      // 2. Try parsing JSON
      // Clean up common PHP issues where text/HTML is prepended to JSON
      let responseText = text;
      const jsonStart = text.search(/[{\[]/);
      if (jsonStart > 0) {
        responseText = text.substring(jsonStart);
      }

      // If text is empty string, JSON.parse throws. Handle it.
      if (!responseText) {
        if (response.ok) {
          console.warn("API returned 200 OK but empty body");
          return { status: "success", message: "Success (Empty Body)" } as any;
        }
        throw new Error(
          `Empty response from server (Status: ${response.status})`
        );
      }

      const data = JSON.parse(responseText);

      // Check if API returned error status
      if (data.status === "error") {
        return {
          status: "error",
          message: data.message || "An error occurred",
        };
      }

      // Return successful response
      return data as ApiResponse<T>;
    } catch (error) {
      // 3. Fallback for non-JSON response (likely HTML error or simple string)
      console.error("Failed to parse response:", error);
      console.log("Raw Response Text:", text); // Log raw text for debugging

      if (!response.ok) {
        // If server returned error (500, 404, etc)
        return {
          status: "error",
          message: `API Error (${response.status}): ${text.substring(0, 100)}`,
        };
      }

      return {
        status: "error",
        message: "Failed to parse API response. Check console for details.",
      };
    }
  }

  /**
   * Main request method (PRIVATE - used internally)
   * WHAT IT DOES:
   * - Builds complete URL
   * - Adds headers
   * - Makes fetch request
   * - Handles authentication errors
   *
   * @param endpoint - API endpoint (e.g., '/users.php')
   * @param options - Request options (method, body, etc.)
   * @returns API response
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit & RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    // Extract our custom options
    const { requiresAuth = true, customHeaders, ...fetchOptions } = options;

    // Build complete URL
    const url = `${this.baseURL}${endpoint}`;

    // Get headers with token
    const headers = this.getHeaders(customHeaders, requiresAuth);

    try {
      // Make HTTP request
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
      });

      // Parse response
      const result = await this.handleResponse<T>(response);

      // Handle unauthorized (401) or token expired
      if (
        response.status === 401 ||
        (result.status === "error" &&
          result.message.toLowerCase().includes("unauthorized"))
      ) {
        // Clear saved data
        storage.clearAuth();
        // Redirect to login
        window.location.href = "/login";
      }

      return result;
    } catch (error) {
      // Network error or other error
      console.error("API request failed:", error);
      return {
        status: "error",
        message: error instanceof Error ? error.message : "Network error",
      };
    }
  }

  /**
   * GET request
   * USE WHEN: Fetching data from server
   * EXAMPLE: Get list of users
   *
   * @param endpoint - API endpoint
   * @param config - Optional configuration
   * @returns API response with data
   */
  async get<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  /**
   * POST request
   * USE WHEN: Creating new data or sending data to server
   * EXAMPLE: Login, create user, submit form
   *
   * @param endpoint - API endpoint
   * @param body - Data to send (will be converted to JSON)
   * @param config - Optional configuration
   * @returns API response
   */
  async post<T>(
    endpoint: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: "POST",
      body: JSON.stringify(body), // Convert object to JSON string
    });
  }

  /**
   * PUT request
   * USE WHEN: Updating existing data (complete replacement)
   * EXAMPLE: Update entire user profile
   *
   * @param endpoint - API endpoint
   * @param body - Data to send
   * @param config - Optional configuration
   * @returns API response
   */
  async put<T>(
    endpoint: string,
    body?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  /**
   * DELETE request
   * USE WHEN: Deleting data
   * EXAMPLE: Delete user, remove item
   *
   * @param endpoint - API endpoint
   * @param config - Optional configuration
   * @returns API response
   */
  async delete<T>(
    endpoint: string,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }

  /**
   * UPLOAD file
   * USE WHEN: Uploading files (images, documents, etc.)
   *
   * NOTE: Different from other methods because:
   * - Uses FormData instead of JSON
   * - Doesn't set Content-Type (browser sets it automatically)
   *
   * @param endpoint - API endpoint
   * @param formData - FormData object with file
   * @param config - Optional configuration
   * @returns API response
   */
 async upload<T>(
    endpoint: string,
    formData: FormData,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    const { requiresAuth = true, customHeaders } = config || {};
    const url = `${this.baseURL}${endpoint}`;

    // Build headers (no Content-Type for file upload)
    const headers: HeadersInit = { ...customHeaders };
    if (requiresAuth) {
      const token = storage.getToken();
      if (token) {
        headers["customAuthorization"] = `Bearer ${token}`;  
      }
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: formData, // Send FormData directly
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      console.error("Upload failed:", error);
      return {
        status: "error",
        message: error instanceof Error ? error.message : "Upload failed",
      };
    }
  }
}

export const apiClient = new ApiClient(API_CONFIG.BASE_URL);
