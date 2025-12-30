export interface ApiResponse<T = unknown> {
  status: "success" | "error"; // Either 'success' or 'error'
  message: string; // Message from API
  token?: string;
  count?: number;
  data?: T; // Optional: actual data (any type)
}

/**
 * LoginRequest
 * Structure of data we SEND when logging in
 */
export interface LoginRequest {
  email: string; // User's email
  password: string; // User's password
}

/**
 * LoginResponse
 * Structure of data we RECEIVE after successful login
 */
export interface LoginResponse {
  status: "success"; // Always 'success' for this type
  message: string; // Success message
  token: string; // JWT token for authentication
}

/**
 * Company
 * Structure of a company object
 */
export interface Company {
  id: string;
  name: string;
  image_url: string; // URL of the company's logo/image
  status: string;
  logo?: File; // e.g., "active"
}

export interface GetCompaniesResponse extends ApiResponse<Company[]> {
  status: "success" | "error";
  count: number; // Total number of companies
  data: Company[]; // Array of companies
}

// Insurance Types
export interface InsuranceType {
  id: string;
  name: string;
  status: string;
  expiry_date?: string;
  renewal_date?: string;
}

export interface GetInsuranceTypesResponse
  extends ApiResponse<InsuranceType[]> {
  status: "success" | "error";
  count: number;
  data: InsuranceType[];
}

// export interface PoliciesType {
//     ids: number; 
//   id: string;
//   user_id: string;
//   insurance_type_id: string;
//     status: string;
//   insurance_company_id: string;
//   policy_holder_name: string;
//   policy_number: string;
//   details: string;
//   sum_insured_amount: string;
//   premium_amount: string;
//   payment_cycle: string;
//   duration: string;
//   start_date: string;
//   end_date: string;
//   next_payment_date: string;
//   isVerified: string;
//   notes: string;
//   created_at: string;
//   updated_at: string;
//   image_url: string;
// }
export interface Policy {
  id: string;
  user_id: string;

  client_name: string;
  policy_no: string;

  insurance_category: string;
  insurer_name: string;

  policy_start_date: string;
  policy_end_date: string;

  sum_insured: string;
  sum_currency: string;
  gross_premium: string;

  vehicle_number: string;
  fuel_type: string | null;

  next_payment_date: string | null;
  policy_status: string;

  is_verified: string;

  created_at: string;
  updated_at: string;

  image_url: string;
}
export interface GetPoliciesTypesResponse extends ApiResponse<Policy[]> {
  status: "success" | "error";
  count: number;
  data: Policy[];
}




//  upcoming expiry insurance policy
export interface UpcomingExpiryPolicy {
  id: string;
  user_id: string;
  policy_holder_name: string;
  policy_number: string;
  details: string;
  sum_insured_amount: string; // could convert to number if needed
  premium_amount: string; // could convert to number if needed
  payment_cycle: string;
  duration: string; // could convert to number if needed
  start_date: string; // ISO date string
  end_date: string; // ISO date string
  next_payment_date: string; // ISO date string
  notes: string;
  insurance_type_id: string;
  insurance_type: string;
  insurance_company_id: string;
  insurance_company: string;
  company_logo: string;
}

// API response for upcoming expiry policies
export interface GetUpcomingExpiryPoliciesResponse {
  message: string;
  status: "success" | "error";
  count: number;
  data: UpcomingExpiryPolicy[];
}

// Dashboard API response
export interface DashboardSummary {
  total_users: string;
  total_insurances: string;
  expiring_insurances: string;
}

export interface GetDashboardSummaryResponse
  extends ApiResponse<DashboardSummary> {
  status: "success" | "error";
  data: DashboardSummary;
}

// Notification SEND
export interface NotificationResult {
  token: string;
  success: boolean;
  message_id: string;
}

export interface NotificationApiResponse {
  success: boolean;
  message: string;
  results: NotificationResult[];
}

//EMAIL SEND
// Email Send API response
export interface EmailApiResponse {
  status: "success" | "error";
  message: string; // success or error message
}

// pie chart
// export interface DashboardSummary {
//   total_users: number;
//   total_insurances: number;
//   expiring_insurances: number;
// }

// export interface GetDashboardSummaryResponse {
//   status: "success" | "error";
//   data: DashboardSummary;
// }

//BarChart
// Each day’s data
export interface DayData {
  day: number | string;
  count: number | string;
}

// Each month contains days
export interface MonthData {
  month: string;
  days: DayData[];
}

// Year data with months
export interface YearData {
  year: string;
  months: Record<string, MonthData>;
}

// Full API response for chart
export interface GetChartDataResponse {
  status: "success" | "error";
  data: YearData[];
}
