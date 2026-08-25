import {
  CATEGORY_LIMIT,
  RECENT_LIMIT,
  SEARCH_LIMIT,
} from "@/lib/changes/constants";
import { getChangesCollection } from "@/lib/changes/collection";
import { buildSearchFilter } from "@/lib/changes/searchFilter";

export async function queryAllChanges(limit: number, skip: number) {
  const collection = await getChangesCollection();
  return collection.find({}).sort({ date: -1 }).skip(skip).limit(limit).toArray();
}

export async function queryRecentChanges() {
  const collection = await getChangesCollection();
  return collection.find({}).sort({ date: -1 }).limit(RECENT_LIMIT).toArray();
}

export async function queryMongoChanges() {
  const collection = await getChangesCollection();
  return collection
    .find({ doctype: "mongodb" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();
}

export async function queryNextChanges() {
  const collection = await getChangesCollection();
  return collection
    .find({ doctype: "nextjs" })
    .sort({ date: -1 })
    .limit(CATEGORY_LIMIT)
    .toArray();
}

export async function querySearchChanges(query: string) {
  const collection = await getChangesCollection();
  const filter = buildSearchFilter(query);
  return collection.find(filter).sort({ date: -1 }).limit(SEARCH_LIMIT).toArray();
}
