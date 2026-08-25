import { cacheLife, cacheTag } from "next/cache";
import {
  DEFAULT_CACHE_SECONDS,
  SEARCH_CACHE_SECONDS,
} from "@/lib/changes/constants";
import {
  queryAllChanges,
  queryMongoChanges,
  queryNextChanges,
  queryNodeChanges,
  queryRecentChanges,
  querySearchChanges,
  queryTailwindChanges,
  queryTypeScriptChanges,
} from "@/lib/changes/queries";

export async function getAllChangesCached(limit: number, skip: number) {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-all");
  return queryAllChanges(limit, skip);
}

export async function getRecentChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-recent");
  return queryRecentChanges();
}

export async function getMongoChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-mongo");
  return queryMongoChanges();
}

export async function getNextChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-next");
  return queryNextChanges();
}

export async function getSearchChangesCached(query: string) {
  "use cache";
  cacheLife({ revalidate: SEARCH_CACHE_SECONDS });
  cacheTag("changes", "changes-search");
  return querySearchChanges(query);
}

export async function getTailwindChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-tailwind");
  return queryTailwindChanges();
}

export async function getNodeChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-node");
  return queryNodeChanges();
}

export async function getTypeScriptChangesCached() {
  "use cache";
  cacheLife({ revalidate: DEFAULT_CACHE_SECONDS });
  cacheTag("changes", "changes-typescript");
  return queryTypeScriptChanges();
}

