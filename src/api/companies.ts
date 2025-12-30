import { apiClient } from "./client";
import { API_ENDPOINTS } from "./config";
import {
  Company,
  GetCompaniesResponse,
  ApiResponse,
  GetInsuranceTypesResponse,
  InsuranceType,
} from "./types";

export const companiesApi = {
  /**
   * Fetch all companies
   * @returns GetCompaniesResponse - API response containing company array
   */
  async getComapines(): Promise<GetCompaniesResponse> {
    const response: ApiResponse<Company[]> = await apiClient.get(
      API_ENDPOINTS.GET_COMPANIES
    );

    // Ensure response is shaped like GetCompaniesResponse
    return {
      status: response.status,
      message: response.message,
      count: response.data?.length || 0,
      data: response.data || [],
    };
  },

  /**
   * Create uplpad api
   */
  async uploadCompany(company: Company, file: File): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append("name", company.name);
    formData.append("id", company.id);
    formData.append("status", company.status);
    if (file) formData.append("file", file);

    const response = await apiClient.upload<ApiResponse>(
      API_ENDPOINTS.SAVE_COMPANIE,
      formData
    );

    return response;
  },

  /**
   * Save or update a company (optional for later)
   */
  // async saveCompany(company: Company, file?: File): Promise<Company> {
  //   const formData = new FormData();
  //   formData.append('name', company.name);
  //   formData.append('status', company.status);
  //   if (file) formData.append('file', file);

  //   const response = await apiClient.upload<Company>(API_ENDPOINTS.SAVE_COMPANY, formData);

  //   if (response.status === 'success' && response.data) {
  //     return response.data;
  //   } else {
  //     throw new Error(response.message || 'Failed to save company');
  //   }
  // },
};

export const insuranceApi = {
  /**
   * Fetch all insurance types
   * @returns GetInsuranceTypesResponse - API response containing insurance array
   */
  async getInsurances(): Promise<GetInsuranceTypesResponse> {
    const response: ApiResponse<InsuranceType[]> = await apiClient.get(
      API_ENDPOINTS.GET_INSURANCE
    );

    return {
      status: response.status as "success" | "error",
      message: response.message,
      count: response.count || response.data?.length || 0,
      data: response.data || [],
    };
  },

  /**
   * Create or update insurance type
   */
  async saveInsurance(insurance: InsuranceType): Promise<ApiResponse> {
    const formData = new FormData();
    if (insurance.id) formData.append("id", insurance.id); // optional for update
    formData.append("name", insurance.name);
    formData.append("status", insurance.status);

    const response = await apiClient.upload<ApiResponse>(
      API_ENDPOINTS.SAVE_INSURANCE,
      formData
    );

    return response;
  },
};
