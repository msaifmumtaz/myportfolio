import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { socialLinks } from "@/data/config";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.email("Invalid email address"),
  budget: z.string().optional(),
  details: z.string().min(10, "Project details must be at least 10 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = contactSchema.parse(body);
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: "SaifCodes.com <contact@updates.saifcodes.com>",
      to: [socialLinks.email, "msaifmumtaz@gmail.com"],
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || "Not specified"}</p>
        <p><strong>Budget Range:</strong> ${validatedData.budget || "Not specified"}</p>
        <br/>
        <p><strong>Project Details:</strong></p>
        <p>${validatedData.details.replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

