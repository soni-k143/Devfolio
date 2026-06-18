import { NextRequest, NextResponse } from 'next/server';

// This function handles POST requests to /api/contact
// Angular equivalent: an @Post() method in a NestJS controller
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log it for now — later you'd send an email here
    console.log('New contact message:', { name, email, message });

    // Return success
    return NextResponse.json(
      { success: true, message: 'Message received!' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}