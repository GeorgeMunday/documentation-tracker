import { fetchHtml, htmlToMarkdown } from "./services.js";
import { cleanText, parseLooseDate, slugify } from "./utils.js";

const NEXT_DATE_LINE =
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}(st|nd|rd|th)?,\s+\d{4}$/;
const LINK_G = /\[([^\]]+)\]\(([^)]+)\)/g;

function parseNextEntries(markdown) {
  const lines = markdown.split("\n").map((l) => l.trim());
  const entries = [];
  let current = null;

  for (const line of lines) {
    if (NEXT_DATE_LINE.test(line)) {
      if (current) entries.push(current);
      current = { date: line, title: null, url: null, descLines: [] };
      continue;
    }
    if (!current) continue;

    if (line.startsWith("[Read More]")) continue;

    if (!current.title) {
      const matches = [...line.matchAll(LINK_G)];
      const titleLink = matches.find((m) => !m[2].includes("/tag/"));
      if (titleLink) {
        current.title = titleLink[1];
        current.url = titleLink[2];
      }
      continue;
    }

    if (line) {
      current.descLines.push(line);
    }
  }
  if (current) entries.push(current);

  return entries.map((e) => ({
    id: `next-${slugify(e.url ? e.url.split("/").pop() : e.title)}`,
    doctype: "nextjs",
    title: cleanText(e.title || ""),
    description: cleanText(e.descLines.join(" ")) || cleanText(e.title || ""),
    date: parseLooseDate(e.date),
  }));
}

export async function scrapeNextJsBlog(limit = 10) {
  const html = await fetchHtml("https://nextjs.org/blog");
  const markdown = htmlToMarkdown(html);
  return parseNextEntries(markdown).slice(0, limit);
}
