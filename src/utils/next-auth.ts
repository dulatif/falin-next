// Client-side authentication utilities for Laravel Sanctum
// Note: Sanctum uses plain API tokens, NOT JWT tokens

import { env } from "@/config/env";

// --- Shared Constants ---
const TOKEN_KEY = "token";
const SESSION_COOKIE_NAME = TOKEN_KEY;

// --- Type Definitions ---
export interface AuthSession {
  userId: string;
  email?: string;
}

// --- Internal Helper Functions (Client-side) ---

/**
 * Validates a Laravel Sanctum token format (Client-side).
 * Sanctum tokens look like: "10|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c"
 * Format: {id}|{hash}
 */
export const isValidSanctumToken = (token?: string): boolean => {
  if (typeof window === "undefined") return false;

  if (!token) {
    console.warn("🔍 Auth: No token provided");
    return false;
  }

  // Sanctum token format: {id}|{hash}
  // Example: 10|uWYnwUyHjlD782Sdj2RtQg5utD7UrRk9QByigKxO1b16d40c
  const parts = token.split("|");

  if (parts.length !== 2) {
    console.error(
      "🔍 Auth: Invalid Sanctum token format - Expected format: {id}|{hash}, got:",
      token,
    );
    return false;
  }

  const [id, hash] = parts;

  // Validate ID is a number
  if (!/^\d+$/.test(id)) {
    console.error("🔍 Auth: Invalid token ID (must be numeric):", id);
    return false;
  }

  // Validate hash exists and has reasonable length (Sanctum hashes are typically 40+ chars)
  if (!hash || hash.length < 30) {
    console.error("🔍 Auth: Invalid token hash length:", hash?.length);
    return false;
  }

  console.log("🔍 Auth: Sanctum token is valid ✅");
  return true;
};

/**
 * Sets a cookie using client-side `document.cookie`.
 */
function setCookie(name: string, value: string, days = 7) {
  if (typeof window === "undefined") return;
  const maxAge = days * 24 * 60 * 60;

  // Use secure flag only in production (HTTPS)
  const isProduction = env("mode") === "production";
  const secureFlag = isProduction ? "secure;" : "";

  document.cookie = `${name}=${value}; path=/; ${secureFlag} sameSite=lax; max-age=${maxAge}`;
}

function deleteCookie(name: string) {
  if (typeof window === "undefined") return;
  document.cookie = `${name}=; path=/; Max-Age=0`;
}

// --- Public Client Functions (Used by Login/Logout UI) ---

export function login(token: string): Promise<{ status: "success" | "error" }> {
  return new Promise((resolve) => {
    try {
      console.log(
        "🔐 Login: Received token:",
        token ? token.substring(0, 20) + "..." : "empty",
      );

      if (!isValidSanctumToken(token)) {
        console.error("🔐 Login: Token validation failed");
        throw new Error("Provided token is invalid or malformed.");
      }

      console.log("🔐 Login: Token validated successfully");

      // 1. Store in localStorage (client-side persistence)
      localStorage.setItem(TOKEN_KEY, token);
      console.log("🔐 Login: Stored in localStorage");

      // 2. Store in a cookie (for Server Component route protection)
      setCookie(SESSION_COOKIE_NAME, token);
      console.log("🔐 Login: Stored in cookie");

      resolve({ status: "success" });
    } catch (err) {
      console.error("🔐 Login error:", err);
      resolve({ status: "error" });
    }
  });
}

export function logout(): Promise<{ status: "success" | "error" }> {
  return new Promise((resolve) => {
    try {
      localStorage.removeItem(TOKEN_KEY);
      deleteCookie(SESSION_COOKIE_NAME);
      resolve({ status: "success" });
    } catch (err) {
      console.error("Logout error:", err);
      resolve({ status: "error" });
    }
  });
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}
