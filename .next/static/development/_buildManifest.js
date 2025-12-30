self.__BUILD_MANIFEST = {
  "/companies": [
    "./static/chunks/pages/companies.js"
  ],
  "/dashboard": [
    "./static/chunks/pages/dashboard.js"
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
    "/policies",
    "/upcomingExpiries",
    "/users"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()