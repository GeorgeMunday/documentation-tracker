import { NextResponse } from "next/server";
import { getRecentChangesCached } from "@/lib/cache/changesCache";

export async function GET() {
  try {
    const changes = await getRecentChangesCached();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "MongoDB unavailable", details: message },
      { status: 503 }
    );
  }
}