// authApi.ts
import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import { storage } from "./storage";
import { ApiResponse, LoginRequest, LoginResponse } from "./types";

export const authApi = {
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.LOGIN,
      credentials,
      { requiresAuth: false }
    );

    if (response.status === "success") {
      const maybeAny = response as any;
      const token =
        maybeAny.token ?? maybeAny.data?.token ?? maybeAny.data?.data?.token;
      if (token) {
        storage.setToken(token);
        storage.setUser({ email: credentials.email });
      }
    }

    return response;
  },

  async logout(): Promise<void> {
    storage.clearAuth();
    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }
  },

  isAuthenticated(): boolean {
    return storage.isAuthenticated();
  },

  getToken(): string | null {
    return storage.getToken();
  },

  getUser(): unknown | null {
    return storage.getUser();
  },
};
