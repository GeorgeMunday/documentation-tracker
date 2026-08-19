import {NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongo/connection";

export async function GET(NextRequest: NextRequest) {
  const { searchParams } = new URL(NextRequest.url);

  const parsedLimit = Number(searchParams.get("limit") ?? "5");
  const parsedSkip = Number(searchParams.get("skip") ?? "0");
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;
  const skip = Number.isFinite(parsedSkip) && parsedSkip >= 0 ? parsedSkip : 0;

  try {
    const conn = await connectDB();
    const db = conn.connection.db;
    if (!db) {
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }
    const collection = db.collection("changes");
    const changes = await collection.find({}).sort({ date: -1 }).limit(limit).skip(skip).toArray();
    return NextResponse.json(changes);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "MongoDB unavailable", details: message },
      { status: 503 }
    );
  }
}