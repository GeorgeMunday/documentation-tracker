import { fetchHtml, htmlToMarkdown } from "./services.js";
import { cleanText, parseLooseDate, slugify } from "./utils.js";

const TAILWIND_DATE_LINE =
  /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(st|nd|rd|th)?,\s+\d{4}$/;
const TAILWIND_TITLE_LINE = /^\[([^\]]+)\]\((\/blog\/[^)]+)\)$/;

function parseTailwindEntries(markdown) {
  const lines = markdown.split("\n").map((l) => l.trim());
  const entries = [];
  let pendingDate = null;
  let current = null;

  for (const line of lines) {
    if (TAILWIND_DATE_LINE.test(line)) {
      pendingDate = line;
      continue;
    }

    const titleMatch = line.match(TAILWIND_TITLE_LINE);
    if (titleMatch && !line.startsWith("[Read more]")) {
      if (current) {
        entries.push(current);
      }
      current = {
        title: titleMatch[1],
        url: `https://tailwindcss.com${titleMatch[2]}`,
        date: pendingDate,
        descLines: [],
      };
      continue;
    }

    if (!current || !line) {
      continue;
    }

    if (line.startsWith("[Read more]")) {
      continue;
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
    id: `tailwind-${slugify(e.url ? e.url.split("/").filter(Boolean).pop() : e.title)}`,
    doctype: "tailwindcss",
    title: cleanText(e.title || ""),
    description: cleanText(e.descLines.join(" ")) || cleanText(e.title || ""),
    date: parseLooseDate(e.date),
  }));
}

export async function scrapeTailwindBlog(limit = 10) {
  const html = await fetchHtml("https://tailwindcss.com/blog");
  const markdown = htmlToMarkdown(html);
  return parseTailwindEntries(markdown).slice(0, limit);
}