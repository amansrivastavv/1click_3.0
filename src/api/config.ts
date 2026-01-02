const isProd = process.env.NODE_ENV === "production";

export const API_CONFIG = {
  BASE_URL: isProd ? "https://appapi.1clickpolicy.com" : "/api/proxy",
  TOKEN_KEY: "auth_token",
  USER_KEY: "user_data",
};

export const API_ENDPOINTS = {
  LOGIN: "/admin_login.php",
  GET_COMPANIES: "/admin_get_insurance_companies.php",
  SAVE_COMPANIE: "/admin_update_insurance_companies.php",
  // Add more endpoints here
  // DASHBOARD: '/dashboard.php',
  // USERS: '/users.php',

  GET_INSURANCE: "/admin_get_insurance_types.php",
  SAVE_INSURANCE: "/add_update_insurance_types.php",

  GET_UPCOMMING: "/admin_getUserInsurances_v2.php",
  DASHBOARD_CARDS_DATA: "/admin_dashboard_values.php",
  VIEW_UPCOMMING: "/admin_getUserInsurances_v2.php",

  //For notification send
  NOTIFICATIONS_SEND: "/firebase_notificationv2.php?user_id=5",

  //For Send Email
  EMAIL_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",
  SMS_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",
  WHATSAPP_SEND: "/email_notificationv2.php?user_id=8&policy_id=1",

  //for bar chart
  GETBAR_CHART: "/admin_get_user_registration_chart.php",

  ADMIN_GET_USER_POLICIES: "/admin_get_user_policy_v2.php",
  ADMIN_UPDATE_POLICY: "/admin_upload_policy_v2.php",

  //Bar chart Data yearly/monthly/daily
  GET_USER_CHART_DATA: "/admin_barchart_report.php",

  //user data
  GET_USERS_DATA: "/user_policy_data.php",

  //Data
  GET_read_csv: "/admin_read-csv.php",
  GET_sync_csv: "/admin_sync_csv.php",

  // Manage Dashboard
  GET_POLICY_OPTIONS: "/get_policy_options.php",
  UPDATE_POLICY_OPTIONS: "/admin_update_policy_option.php",
};
