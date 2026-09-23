import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Please provide a valid phone number").max(20),
  projectType: z.string().min(1, "Please select a project type"),
  projectLocation: z.string().min(2, "Please provide a project location / city"),
  approximateSize: z.string().optional(),
  servicesRequired: z.array(z.string()).min(1, "Please select at least one required service"),
  estimatedBudget: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters describing your project requirements").max(2000),
  // Honeypot field for bot protection (should be empty from real humans)
  hp_website: z.string().max(0, "Bot submission detected").optional().or(z.literal("")),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Anti-bot check: if honeypot is filled, return silent success without doing anything
    if (body.hp_website && body.hp_website.length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // Schema validation
    const result = inquirySchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = result.data;

    // Log securely in server logs (without leaking secrets)
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name: validData.name,
      email: validData.email,
      phone: validData.phone,
      projectType: validData.projectType,
      location: validData.projectLocation,
      services: validData.servicesRequired,
      budget: validData.estimatedBudget,
      size: validData.approximateSize,
    });

    // Here a transactional email provider (Resend, SendGrid, Postmark) can be integrated via process.env
    // When configured, it will dispatch to the studio email.
    
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting Akritidesigners. We have received your project details and will review your technical requirements within 24 business hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INQUIRY_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your inquiry. Please try again or reach out to our studio directly.",
      },
      { status: 500 }
    );
  }
}
