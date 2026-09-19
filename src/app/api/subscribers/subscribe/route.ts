import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';
import Subscriber from '@/lib/models/Subscribers';
import { sendEmail } from '@/lib/email/sendEmail';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!emailPattern.test(normalizedEmail)) {
      return NextResponse.json({ error: 'Enter a valid email address' }, { status: 400 });
    }

    await connectDB();
    const existingSubscriber = await Subscriber.findOne({ email: normalizedEmail });

    if (existingSubscriber?.verified) {
      return NextResponse.json({ message: 'This email is already subscribed' }, { status: 409 });
    }

    const verificationToken = randomBytes(32).toString('hex');
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await Subscriber.findOneAndUpdate(
      { email: normalizedEmail },
      { email: normalizedEmail, verified: false, verificationToken, verificationTokenExpiry },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

    const verificationUrl = `${new URL(request.url).origin}/api/subscribers/verify?token=${verificationToken}`;
    await sendEmail({
      to: normalizedEmail,
      subject: 'Verify your Documentation Tracker subscription',
      html: `<p>Confirm your subscription by clicking <a href="${verificationUrl}">this link</a>.</p>`,
    });

    return NextResponse.json({ message: 'Check your inbox to verify your subscription' }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to subscribe';
    const status = message === 'Email service is not configured' ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}