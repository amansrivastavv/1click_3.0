self.__BUILD_MANIFEST = {
  "/": [
    "./static/chunks/pages/index.js"
  ],
  "/_error": [
    "./static/chunks/pages/_error.js"
  ],
  "/companies": [
    "./static/chunks/pages/companies.js"
  ],
  "/dashboard": [
    "./static/chunks/pages/dashboard.js"
  ],
  "/login": [
    "./static/chunks/pages/login.js"
  ],
  "/manage-dashboard": [
    "./static/chunks/pages/manage-dashboard.js"
  ],
  "/policies": [
    "./static/chunks/pages/policies.js"
  ],
  "/upcomingExpiries": [
    "./static/chunks/pages/upcomingExpiries.js"
  ],
  "/users": [
    "./static/chunks/pages/users.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/api/proxy/:path*"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/companies",
    "/dashboard",
    "/insuranceTypes",
    "/login",
    "/manage-dashboard",
    "/policies",
    "/upcomingExpiries",
    "/users"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()