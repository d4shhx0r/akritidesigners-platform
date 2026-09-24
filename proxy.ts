import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Static assets and internal build files are public
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/branding") ||
    pathname.startsWith("/renders") ||
    pathname.startsWith("/favicon") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.(svg|png|jpg|jpeg|webp|ico|css|js|map|txt|xml|woff|woff2)$/i)
  ) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("akriti_auth_session")?.value;
  const isAuthenticated = Boolean(sessionCookie && sessionCookie.length > 20);

  // 2. If visiting /login:
  if (pathname === "/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // 3. For any other page across the entire site, require authentication
  if (!isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    if (pathname !== "/") {
      loginUrl.searchParams.set("from", pathname);
    }
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
