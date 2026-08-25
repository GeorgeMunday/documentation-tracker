import { NextResponse } from "next/server";
import { getNodeChangesCached } from "@/lib/cache/changesCache";

export async function GET() {
  try {
    const changes = await getNodeChangesCached();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        error: "Node.js changes unavailable",
        details: message,
      },
      { status: 503 }
    );
  }
}
