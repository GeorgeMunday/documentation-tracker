import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';
import Subscriber from '@/lib/models/Subscribers';
import { getRecentChangesCached } from '@/lib/cache/changesCache';
import { sendEmail } from '@/lib/email/sendEmail';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';

    if (!normalizedEmail) {
      return NextResponse.json({ error: 'Enter your email address' }, { status: 400 });
    }

    await connectDB();
    const subscriber = await Subscriber.findOne({ email: normalizedEmail, verified: true });

    if (!subscriber) {
      return NextResponse.json({ error: 'Verify your subscription before requesting an update' }, { status: 403 });
    }

    const changes = await getRecentChangesCached();
    const changeList = changes
      .map((change) => `<li><strong>${change.title}</strong><br />${change.description}</li>`)
      .join('');

    await sendEmail({
      to: normalizedEmail,
      subject: 'The latest Documentation Tracker changes',
      html: `<h1>Latest documentation changes</h1><ul>${changeList || '<li>No recent changes found.</li>'}</ul>`,
    });

    return NextResponse.json({ message: 'The latest update was sent' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to send update';
    const status = message === 'Email service is not configured' ? 503 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}