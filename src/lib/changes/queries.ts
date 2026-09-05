import {
  CATEGORY_LIMIT,
  RECENT_LIMIT,
  SEARCH_LIMIT,
} from "@/lib/changes/constants";
import { getChangesCollection } from "@/lib/changes/collection";
import { buildSearchFilter } from "@/lib/changes/searchFilter";
import type { IChange } from "@/lib/models/Change";

type ChangeDocument = {
  _id?: unknown;
  id?: unknown;
  doctype?: unknown;
  title?: unknown;
  description?: unknown;
  date?: unknown;
};

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : String(value ?? "");
}

function toDateString(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return toStringValue(value);
}

function toPlainChange(change: ChangeDocument): IChange {
  return {
    _id: toStringValue(change._id),
    id: toStringValue(change.id),
    doctype: toStringValue(change.doctype),
    title: toStringValue(change.title),
    description: toStringValue(change.description),
    date: toDateString(change.date),
  };
}

export async function queryAllChanges(limit: number, skip: number) {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({})
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}

export async function queryRecentChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({})
    .sort({ date: -1 })
    .limit(RECENT_LIMIT)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}

export async function queryMongoChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({ doctype: "mongodb" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}

export async function queryNextChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({ doctype: "nextjs" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}

export async function queryTailwindChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({ doctype: "tailwindcss" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}

export async function queryNodeChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({ doctype: "nodejs" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();
    return changes.map((change) => toPlainChange(change));
}

export async function queryTypeScriptChanges() {
  const collection = await getChangesCollection();
  const changes = await collection
    .find({ doctype: "typescript" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();
  return changes.map((change) => toPlainChange(change));
}

export async function querySearchChanges(query: string) {
  const collection = await getChangesCollection();
  const filter = buildSearchFilter(query);
  const searchCursor = collection.find(filter);
  const changes = await searchCursor
    .sort({ date: -1 })
    .limit(SEARCH_LIMIT)
    .toArray();

  return changes.map((change) => toPlainChange(change));
}
