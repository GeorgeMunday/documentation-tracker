import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';

export async function POST() {
  try {
    const conn = await connectDB();
    const db = conn.connection.db;

    if (!db) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }

    const collection = await db.listCollections({ name: 'changes' }).toArray();

    if (collection.length === 0) {
      await db.createCollection('changes');

      return NextResponse.json(
        { message: 'Changes collection created' },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { message: 'Changes collection already exists' },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      {
        error: 'MongoDB unavailable',
        details: message,
      },
      { status: 503 }
    );
  }
}
