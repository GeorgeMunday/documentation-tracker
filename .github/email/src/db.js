import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";

const SUBSCRIBERS_COLLECTION = "subscribers";

function loadMongoUriFromEnvFile() {
  const envFilePath = path.resolve(process.cwd(), "..", "..", ".env.local");
  if (!fs.existsSync(envFilePath)) {
    return null;
  }

  const envFile = fs.readFileSync(envFilePath, "utf8");
  const line = envFile
    .split(/\r?\n/)
    .find((entry) => entry.trim().startsWith("MONGODB_URI="));

  if (!line) {
    return null;
  }

  const value = line.slice("MONGODB_URI=".length).trim();
  if (!value) {
    return null;
  }

  return value.replace(/^['\"]|['\"]$/g, "");
}

function getMongoUri() {
  return process.env.MONGODB_URI || loadMongoUriFromEnvFile();
}

export async function getSubscribers() {
  const mongoUri = getMongoUri();
  if (!mongoUri) {
    throw new Error("MongoDB URI not found");
  }


  await mongoose.connect(mongoUri);
  try {
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database connection unavailable.");
    }

    const collection = db.collection(SUBSCRIBERS_COLLECTION);
    const verifiedSubscribers = await collection.find({ verified: true }).toArray();

    return await verifiedSubscribers;
  } finally {
    await mongoose.disconnect();
  }
}