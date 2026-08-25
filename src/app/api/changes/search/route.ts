import { NextRequest, NextResponse } from 'next/server';
import { getSearchChangesCached } from '@/lib/cache/changesCache';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query')?.trim() || '';

    const changes = await getSearchChangesCached(query);

    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { error: 'MongoDB unavailable', details: message },
      { status: 503 }
    );
  }
}
