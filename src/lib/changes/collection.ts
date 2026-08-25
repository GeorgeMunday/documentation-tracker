import connectDB from "@/lib/mongo/connection";

export async function getChangesCollection() {
  const conn = await connectDB();
  const db = conn.connection.db;

  if (!db) {
    throw new Error("Database connection failed");
  }

  return db.collection("changes");
}
