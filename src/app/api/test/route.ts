import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, message: 'API is working' });
}

export async function POST() {
  return NextResponse.json({ ok: true, message: 'API is working' });
}
