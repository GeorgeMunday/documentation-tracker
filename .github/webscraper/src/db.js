import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";

const CHANGES_COLLECTION = "changes";

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

export async function insertNewChangesOnly(changes) {
  const mongoUri = getMongoUri();
  const total = new Set(changes.map((change) => change.id)).size;

  if (!mongoUri) {
    console.error(
      "MONGODB_URI not configured. Skipping Mongo sync and continuing scrape output only."
    );
    return {
      inserted: 0,
      existing: total,
      total,
      skipped: true,
    };
  }

  await mongoose.connect(mongoUri, { bufferCommands: false });

  try {
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error("Database connection unavailable.");
    }

    const collection = db.collection(CHANGES_COLLECTION);
    const uniqueById = new Map();
    for (const change of changes) {
      if (!uniqueById.has(change.id)) {
        uniqueById.set(change.id, change);
      }
    }

    const dedupedChanges = [...uniqueById.values()];
    const ids = dedupedChanges.map((change) => change.id);
    const existing = await collection
      .find({ id: { $in: ids } }, { projection: { id: 1 } })
      .toArray();

    const existingIds = new Set(existing.map((record) => record.id));
    const newChanges = dedupedChanges.filter(
      (change) => !existingIds.has(change.id)
    );

    if (newChanges.length > 0) {
      await collection.insertMany(newChanges, { ordered: false });
    }

    return {
      inserted: newChanges.length,
      existing: dedupedChanges.length - newChanges.length,
      total: dedupedChanges.length,
      skipped: false,
    };
  } finally {
    await mongoose.disconnect();
  }
}
