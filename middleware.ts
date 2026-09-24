import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static assets and internal next routes are always public
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.includes(".") || // static files like favicon.ico, images, robots.txt
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("akriti_auth_session")?.value;
  const isAuthenticated = Boolean(sessionCookie && sessionCookie.length > 20);

  // If already logged in and visiting /login, redirect to home
  if (pathname === "/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // All other pages require authentication
  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    if (pathname !== "/") {
      loginUrl.searchParams.set("from", pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
