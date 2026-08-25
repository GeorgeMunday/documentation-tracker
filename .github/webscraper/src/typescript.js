import { fetchHtml, htmlToMarkdown } from "./services.js";
import { cleanText, parseLooseDate, slugify } from "./utils.js";

const TS_DATE_LINE =
  /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(st|nd|rd|th)?,\s+\d{4}$/;
const TS_TITLE_LINE =
  /^### \[([^\]]+)\]\((https?:\/\/devblogs\.microsoft\.com\/typescript\/[^)]+)\)$/;

function parseTypeScriptEntries(markdown) {
  const lines = markdown.split("\n").map((l) => l.trim());
  const entries = [];
  let pendingDate = null;
  let current = null;

  for (const line of lines) {
    if (TS_DATE_LINE.test(line)) {
      pendingDate = line;
      continue;
    }

    const titleMatch = line.match(TS_TITLE_LINE);
    if (titleMatch) {
      if (current) {
        entries.push(current);
      }
      current = {
        title: titleMatch[1],
        url: titleMatch[2],
        date: pendingDate,
        descLines: [],
      };
      continue;
    }

    if (!current || !line) {
      continue;
    }

    if (
      line.startsWith("![") ||
      line.startsWith("Post comments count") ||
      line.startsWith("Post likes count") ||
      line === "[Load more posts](https://devblogs.microsoft.com/typescript/page/2/)"
    ) {
      if (line === "[Load more posts](https://devblogs.microsoft.com/typescript/page/2/)") {
        entries.push(current);
        current = null;
      }
      continue;
    }

    if (line.startsWith("## Popular topics")) {
      if (current) {
        entries.push(current);
        current = null;
      }
      break;
    }

    current.descLines.push(line);
  }

  if (current) {
    entries.push(current);
  }

  const filtered = entries.filter((e) => e.date && e.title && e.url);
  const seen = new Set();
  const deduped = [];
  for (const entry of filtered) {
    if (seen.has(entry.url)) {
      continue;
    }
    seen.add(entry.url);
    deduped.push(entry);
  }

  return deduped.map((e) => ({
    id: `typescript-${slugify(e.url ? e.url.split("/").filter(Boolean).pop() : e.title)}`,
    doctype: "typescript",
    title: cleanText(e.title || ""),
    description: cleanText(e.descLines.join(" ")) || cleanText(e.title || ""),
    date: parseLooseDate(e.date),
  }));
}

export async function scrapeTypeScriptBlog(limit = 10) {
  const html = await fetchHtml("https://devblogs.microsoft.com/typescript/");
  const markdown = htmlToMarkdown(html);
  return parseTypeScriptEntries(markdown).slice(0, limit);
}