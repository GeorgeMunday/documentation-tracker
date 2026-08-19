import { NextResponse } from "next/server";
import connectDB from "@/lib/mongo/connection";

export async function GET() {
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
    const changes = await collection.find({ doctype: "nextjs" }).limit(10).toArray();
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
