import { fetchHtml, htmlToMarkdown } from "./services.js";
import { cleanText, parseLooseDate, slugify } from "./utils.js";

const NODE_DATE_LINE =
  /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(st|nd|rd|th)?,\s+\d{4}$/;
const NODE_ENTRY_LINE =
  /\[Announcements\]\([^)]*\/en\/blog\/announcements\/?[^)]*\)\[([^\]]+)\]\((\/en\/blog\/announcements\/[^)]+)\)/;

function parseNodeEntries(markdown) {
  const lines = markdown.split("\n").map((l) => l.trim());
  const entries = [];
  let pending = null;

  for (const line of lines) {
    const match = line.match(NODE_ENTRY_LINE);
    if (match) {
      pending = {
        title: match[1],
        url: `https://nodejs.org${match[2]}`,
      };
      continue;
    }

    if (pending && NODE_DATE_LINE.test(line)) {
      entries.push({
        title: pending.title,
        url: pending.url,
        date: line,
      });
      pending = null;
    }
  }

  const seen = new Set();
  const deduped = [];
  for (const e of entries) {
    if (seen.has(e.url)) {
      continue;
    }
    seen.add(e.url);
    deduped.push(e);
  }

  return deduped.map((e) => ({
    id: `node-${slugify(e.url ? e.url.split("/").pop() : e.title)}`,
    doctype: "nodejs",
    title: cleanText(e.title || ""),
    description: cleanText(e.title || ""),
    date: parseLooseDate(e.date),
  }));
}

export async function scrapeNodeBlog(limit = 10) {
  const html = await fetchHtml("https://nodejs.org/en/blog/announcements/");
  const markdown = htmlToMarkdown(html);
  return parseNodeEntries(markdown).slice(0, limit);
}

