import { scrapeMongoUpdates } from "./src/mongo.js";
import { scrapeNextJsBlog } from "./src/next.js";
import { insertNewChangesOnly } from "./src/db.js";
import { scrapeNodeBlog} from "./src/node.js";
import { scrapeTypeScriptBlog } from "./src/typescript.js";
import { scrapeTailwindBlog } from "./src/tailwind.js";

async function main() {
  const [nextItems, mongoItems, nodeItems, typeScriptItems, tailwindItems] = await Promise.all([
    scrapeNextJsBlog(10),
    scrapeMongoUpdates(10),
    scrapeNodeBlog(10),
    scrapeTypeScriptBlog(10),
    scrapeTailwindBlog(10),
  ]);

  const all = [
    ...nextItems,
    ...mongoItems,
    ...nodeItems,
    ...typeScriptItems,
    ...tailwindItems,
  ].sort((a, b) => b.date - a.date);
  const sync = await insertNewChangesOnly(all);
  
  console.error(
    `\nFetched ${nextItems.length} Next.js posts, ${mongoItems.length} MongoDB updates, ${nodeItems.length} Node.js posts, ${typeScriptItems.length} TypeScript posts, and ${tailwindItems.length} Tailwind CSS posts.`
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
