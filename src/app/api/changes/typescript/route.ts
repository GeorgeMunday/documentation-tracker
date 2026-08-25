import { NextResponse } from "next/server";
import {  getTypeScriptChangesCached } from "@/lib/cache/changesCache";

export async function GET() {
  try {
    const changes = await getTypeScriptChangesCached();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        error: "TypeScript changes unavailable",
        details: message,
      },
      { status: 503 }
    );
  }
}
