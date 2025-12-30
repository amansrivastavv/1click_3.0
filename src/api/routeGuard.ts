import { storage } from "./storage";

export const routeGuard = {
  protectRoute(): boolean {
    if (typeof window === "undefined") return false;

    const isAuth = storage.isAuthenticated();
    
    if (!isAuth && window.location.pathname !== "/login") {
      window.location.replace("/login");
      return false;
    }
    
    return isAuth;
  },

  redirectIfAuth(): boolean {
    if (typeof window === "undefined") return false;

    const isAuth = storage.isAuthenticated();
    
    if (isAuth && window.location.pathname === "/login") {
      window.location.replace("/dashboard");
      return true;
    }
    
    return false;
  },
};