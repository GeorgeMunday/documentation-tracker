import { NextResponse } from 'next/server';
import { getChangeByIdCached } from '@/lib/cache/changesCache';

type ChangeRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: ChangeRouteContext) {
  const { id } = await params;

  try {
    const change = await getChangeByIdCached(id);

    if (!change) {
      return NextResponse.json({ error: 'Change not found' }, { status: 404 });
    }

    return NextResponse.json(change);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'MongoDB unavailable', details: message },
      { status: 503 }
    );
  }
}