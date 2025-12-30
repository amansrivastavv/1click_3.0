// storage.ts
import { API_CONFIG } from "./config";

class StorageManager {
  /**
   * Check if we're in browser (not SSR)
   */
  private isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem(API_CONFIG.TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem(API_CONFIG.TOKEN_KEY);
    }
    return null;
  }

  setUser(user: unknown): void {
    if (this.isBrowser()) {
      localStorage.setItem(API_CONFIG.USER_KEY, JSON.stringify(user));
    }
  }

  getUser(): unknown | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem(API_CONFIG.USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  clearAuth(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(API_CONFIG.TOKEN_KEY);
      localStorage.removeItem(API_CONFIG.USER_KEY);
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const storage = new StorageManager();