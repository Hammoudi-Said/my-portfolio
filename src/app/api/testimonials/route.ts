import { NextResponse } from "next/server";
import { TESTIMONIALS } from "@/lib/data";

// In-memory store for newly submitted testimonials during runtime (persists across session)
const submittedTestimonials: Array<{
  id: string;
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  rating: number;
  missionScope: string;
  content: string;
  date: string;
  verified: boolean;
  status: "pending" | "approved";
}> = [];

export async function GET() {
  // Return verified official testimonials + any approved reviews
  const approvedNew = submittedTestimonials
    .filter((t) => t.status === "approved")
    .map((t) => {
      const { status, ...rest } = t;
      void status;
      return rest;
    });

  return NextResponse.json({
    testimonials: [...TESTIMONIALS, ...approvedNew],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { authorName, authorTitle, authorCompany, authorEmail, rating, missionScope, content } = body;

    // Strict validation
    if (!authorName || authorName.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name (min 2 characters)." }, { status: 400 });
    }
    if (!authorTitle || !authorCompany) {
      return NextResponse.json({ error: "Please specify your role and company." }, { status: 400 });
    }
    if (!authorEmail || !authorEmail.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid business email." }, { status: 400 });
    }
    if (!content || content.trim().length < 20) {
      return NextResponse.json({ error: "Testimonial content must be at least 20 characters." }, { status: 400 });
    }

    const newTestimonial = {
      id: `review-${Date.now()}`,
      authorName: authorName.trim(),
      authorTitle: authorTitle.trim(),
      authorCompany: authorCompany.trim(),
      rating: Number(rating) || 5,
      missionScope: (missionScope || "Cloud & Platform Mission").trim(),
      content: content.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      verified: true,
      status: "pending" as const,
    };

    submittedTestimonials.push(newTestimonial);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your testimonial has been submitted and will appear after a brief review.",
      testimonial: newTestimonial,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to process testimonial" },
      { status: 500 }
    );
  }
}
