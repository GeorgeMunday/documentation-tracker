import { NextResponse } from "next/server";
import { getNextChangesCached } from "@/lib/cache/changesCache";

export async function GET() {
  try {
    const changes = await getNextChangesCached();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        error: "MongoDB unavailable",
        details: message,
      },
      { status: 503 }
    );
  }
}
