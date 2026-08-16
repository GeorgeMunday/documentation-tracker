import { scrapeMongoUpdates } from "./src/mongo.js";
import { scrapeNextJsBlog } from "./src/next.js";
import { insertNewChangesOnly } from "./src/db.js";

async function main() {
  const [nextItems, mongoItems] = await Promise.all([
    scrapeNextJsBlog(10),
    scrapeMongoUpdates(10),
  ]);

  const all = [...nextItems, ...mongoItems].sort((a, b) => b.date - a.date);
  const sync = await insertNewChangesOnly(all);

  console.log(JSON.stringify(all, null, 2));
  console.error(
    `\nFetched ${nextItems.length} Next.js posts and ${mongoItems.length} MongoDB updates.`
  );
  console.error(
    `Mongo sync: inserted ${sync.inserted}, already existed ${sync.existing}, processed ${sync.total}.`
  );

  return all;
}

main().catch((err) => {
  console.error("Scrape failed:", err.message);
  process.exit(1);
});
