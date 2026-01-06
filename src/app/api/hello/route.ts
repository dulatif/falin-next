import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Hello, Next.js App Router API!",
    timestamp: new Date().toISOString(),
  };

  // Return a NextResponse object with JSON data
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  // Handle the POST request logic
  return NextResponse.json(
    { received: body, status: "success" },
    { status: 200 },
  );
}
