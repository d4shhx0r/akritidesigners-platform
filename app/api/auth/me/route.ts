import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, AUTH_COOKIE_NAME } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!sessionCookie) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }

  const { valid, email } = verifySessionToken(sessionCookie);

  if (!valid) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }

  return NextResponse.json({ authenticated: true, email }, { status: 200 });
}
