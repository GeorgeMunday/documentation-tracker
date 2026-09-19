import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';
import Subscriber from '@/lib/models/Subscribers';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!normalizedEmail) {
      return NextResponse.json({ error: 'Enter your email address' }, { status: 400 });
    }

    await connectDB();
    const result = await Subscriber.deleteOne({ email: normalizedEmail });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'No subscription was found for this email' }, { status: 404 });
    }

    return NextResponse.json({ message: 'You have been unsubscribed successfully' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to unsubscribe';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}