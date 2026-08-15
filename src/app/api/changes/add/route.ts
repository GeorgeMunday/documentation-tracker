import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongo/connection';
import Change from '@/lib/models/Change';

const changes = [
  {
    id: crypto.randomUUID(),
    doctype: 'nextjs',
    title: 'example nextjs change 1',
    description: 'example description',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'nextjs',
    title: 'example nextjs change 2',
    description: 'example description 2',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'nextjs',
    title: 'example nextjs change 3',
    description: 'example description 3',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'nextjs',
    title: 'example nextjs change 4',
    description: 'example description 4',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'nextjs',
    title: 'example nextjs change 5',
    description: 'example description 5',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'mongodb',
    title: 'example mongodb change 1',
    description: 'example description',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'mongodb',
    title: 'example mongodb change 2',
    description: 'example description 2',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'mongodb',
    title: 'example mongodb change 3',
    description: 'example description 3',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'mongodb',
    title: 'example mongodb change 4',
    description: 'example description 4',
  },
  {
    id: crypto.randomUUID(),
    doctype: 'mongodb',
    title: 'example mongodb change 5',
    description: 'example description 5',
  }
];

export async function POST() {
  try {
    await connectDB();

    const insertedChanges = await Change.insertMany(changes);

    return NextResponse.json(
      {
        data: insertedChanges,
        error: null,
      },
      { status: 201 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      {
        data: null,
        error: message,
      },
      { status: 500 }
    );
  }
}