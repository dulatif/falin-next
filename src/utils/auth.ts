import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

export const isValidJwt = (token?: string): boolean => {
  if (!token) return false;
  try {
    const decoded = jwtDecode(token);
    return typeof decoded === "object" && decoded !== null;
  } catch {
    return false;
  }
};

function setCookie(name: string, value: string, days = 7) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; path=/; secure; sameSite=lax; max-age=${maxAge}`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; Max-Age=0`;
}

export function login(token: string): Promise<{ status: "success" | "error" }> {
  return new Promise((resolve) => {
    try {
      localStorage.setItem(TOKEN_KEY, token);
      setCookie(TOKEN_KEY, token);
      resolve({ status: "success" });
    } catch (err) {
      console.error("Login error:", err);
      resolve({ status: "error" });
    }
  });
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function checkToken(): Promise<{ loggedIn: boolean; token?: string }> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve({ loggedIn: false });
      return;
    }

    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      resolve({ loggedIn: true, token });
    } else {
      resolve({ loggedIn: false });
    }
  });
}

export function logout(): Promise<{ status: "success" | "error" }> {
  return new Promise((resolve) => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      deleteCookie(TOKEN_KEY);
      resolve({ status: "success" });
    } catch (err) {
      console.error("Logout error:", err);
      resolve({ status: "error" });
    }
  });
}
