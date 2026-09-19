import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';
import Subscriber from '@/lib/models/Subscribers';
import { sendEmail } from '@/lib/email/sendEmail';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!normalizedEmail) {
      return NextResponse.json({ error: 'Enter your email address' }, { status: 400 });
    }

    await connectDB();
    const subscriber = await Subscriber.findOne({ email: normalizedEmail });

    if (!subscriber) {
      return NextResponse.json({ error: 'No subscription was found for this email' }, { status: 404 });
    }

    if (subscriber.verified) {
      return NextResponse.json({ message: 'This email is already verified' });
    }

    const verificationToken = randomBytes(32).toString('hex');
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    subscriber.verificationToken = verificationToken;
    subscriber.verificationTokenExpiry = verificationTokenExpiry;
    await subscriber.save();

    const verificationUrl = `${new URL(request.url).origin}/api/subscribers/verify?token=${verificationToken}`;
    await sendEmail({
      to: normalizedEmail,
      subject: 'Verify your Documentation Tracker subscription',
      html: `<p>Confirm your subscription by clicking <a href="${verificationUrl}">this link</a>.</p>`,
    });

    return NextResponse.json({ message: 'A new verification email was sent' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to verify subscription';
    const status = message === 'Email service is not configured' ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Verification token is required' }, { status: 400 });
  }

  await connectDB();
  const subscriber = await Subscriber.findOne({
    verificationToken: token,
    verificationTokenExpiry: { $gt: new Date() },
  });

  if (!subscriber) {
    return NextResponse.json({ error: 'This verification link is invalid or expired' }, { status: 400 });
  }

  subscriber.verified = true;
  subscriber.verificationToken = `used-${randomBytes(32).toString('hex')}`;
  subscriber.verificationTokenExpiry = new Date();
  await subscriber.save();

  return NextResponse.json({ message: 'Subscription verified successfully' });
}