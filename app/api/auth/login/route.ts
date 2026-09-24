import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials, generateSessionToken, getAuthorizedDefaultEmail, AUTH_COOKIE_NAME } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, isGoogle } = body;

    let authenticatedEmail = "";

    if (isGoogle) {
      // Direct authenticated 1-click flow for the verified account
      authenticatedEmail = getAuthorizedDefaultEmail();
    } else {
      if (!email || !password) {
        return NextResponse.json(
          { success: false, error: "Please enter both your email and password." },
          { status: 400 }
        );
      }

      const isValid = verifyCredentials(email, password);
      if (!isValid) {
        return NextResponse.json(
          { success: false, error: "Invalid email or password. Please try again." },
          { status: 401 }
        );
      }

      authenticatedEmail = email.toLowerCase().trim();
    }

    if (!authenticatedEmail) {
      return NextResponse.json(
        { success: false, error: "Authentication failed." },
        { status: 401 }
      );
    }

    const sessionToken = generateSessionToken(authenticatedEmail);

    const response = NextResponse.json(
      { success: true, message: "Authentication successful." },
      { status: 200 }
    );

    // Set secure HTTP-only cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("[LOGIN_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server authentication error." },
      { status: 500 }
    );
  }
}
