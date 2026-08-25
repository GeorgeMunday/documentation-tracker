import { cacheLife, cacheTag } from "next/cache";
import {
  DEFAULT_CACHE_SECONDS,
  SEARCH_CACHE_SECONDS,
} from "@/lib/changes/constants";
import {
  queryAllChanges,
  queryMongoChanges,
  queryNextChanges,
  queryRecentChanges,
  querySearchChanges,
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
