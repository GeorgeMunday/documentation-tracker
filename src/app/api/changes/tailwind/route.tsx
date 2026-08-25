import { NextResponse } from "next/server";
import { getTailwindChangesCached } from "@/lib/cache/changesCache";

export async function GET() {
  try {
    const changes = await getTailwindChangesCached();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        error: "Tailwind changes unavailable",
        details: message,
      },
      { status: 503 }
    );
  }
}
