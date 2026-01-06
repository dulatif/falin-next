import { type NextRequest, NextResponse } from "next/server";
import { env } from "./config/env";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  if (env("authentication") === "false") return NextResponse.next();

  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith("/admin") && !token) {
    const loginUrl = new URL("/login", request.url);
    // loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect root path to dashboard if authenticated, or login if not
  if (request.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin/:path*"],
};
