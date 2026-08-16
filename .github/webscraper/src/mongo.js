import { fetchHtml, htmlToMarkdown } from "./services.js";
import { cleanText, parseLooseDate, slugify } from "./utils.js";

const MONGO_DATE_LINE =
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/;

function parseMongoEntries(markdown) {
  const lines = markdown.split("\n").map((l) => l.trim());
  const entries = [];
  let current = null;

  for (const line of lines) {
    if (MONGO_DATE_LINE.test(line)) {
      if (current) entries.push(current);
      current = { date: line, title: null, descLines: [] };
      continue;
    }
    if (!current || !line) continue;

    if (!current.title) {
      current.title = line;
      continue;
    }
    current.descLines.push(line);
  }
  if (current) entries.push(current);

  const seen = new Set();
  const deduped = [];
  for (const e of entries) {
    if (seen.has(e.title)) continue;
    seen.add(e.title);
    deduped.push(e);
  }

  return deduped.map((e) => ({
    id: `mongo-${slugify(e.title)}`,
    doctype: "mongodb",
    title: cleanText(e.title || ""),
    description: cleanText(e.descLines.join(" ")) || cleanText(e.title || ""),
    date: parseLooseDate(e.date),
  }));
}

export async function scrapeMongoUpdates(limit = 10) {
  const html = await fetchHtml("https://www.mongodb.com/products/updates");
  const markdown = htmlToMarkdown(html);
  return parseMongoEntries(markdown).slice(0, limit);
}
