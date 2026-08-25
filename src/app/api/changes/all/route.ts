import { NextRequest, NextResponse } from "next/server";
import { getAllChangesCached } from "@/lib/cache/changesCache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const parsedLimit = Number(searchParams.get("limit") ?? "5");
  const parsedSkip = Number(searchParams.get("skip") ?? "0");
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(parsedLimit, 50) : 5;
  const skip = Number.isFinite(parsedSkip) && parsedSkip >= 0 ? parsedSkip : 0;

  try {
    const changes = await getAllChangesCached(limit, skip);
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "MongoDB unavailable", details: message },
      { status: 503 }
    );
  }
}