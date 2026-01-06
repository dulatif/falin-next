// Server-only authentication utilities for Laravel Sanctum
import "server-only";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "token";

/**
 * Server-Side Authentication Check for Laravel Sanctum
 * This function MUST only be called from Server Components
 *
 * Note: Sanctum tokens cannot be validated server-side without calling the Laravel API.
 * This function only checks if a token exists and has valid format.
 * Actual authentication is verified when the token is used in API requests.
 *
 * @returns Promise<boolean> - Whether a token exists with valid format
 */
export async function isAuthenticatedUserServer(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) {
    return false;
  }

  // Validate Sanctum token format: {id}|{hash}
  const parts = token.split("|");

  if (parts.length !== 2) {
    return false;
  }

  const [id, hash] = parts;

  // Validate ID is numeric and hash exists
  if (!/^\d+$/.test(id) || !hash || hash.length < 30) {
    return false;
  }

  return true;
}
