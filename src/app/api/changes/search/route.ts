import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.trim() || '';

    const conn = await connectDB();
    const db = conn.connection.db;

    if (!db) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }

    const collection = db.collection('changes');

    const filter = query
      ? {
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { doctype: { $regex: query, $options: 'i' } },
          ],
        }
      : {};

    const changes = await collection.find(filter).sort({ date: -1 }).limit(20).toArray();

    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { error: 'MongoDB unavailable', details: message },
      { status: 503 }
    );
  }
}
