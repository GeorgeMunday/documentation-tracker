import axios from "axios";
import * as cheerio from "cheerio";
import { HEADERS, turndown } from "./config.js";

export async function fetchHtml(url) {
  const res = await axios.get(url, { headers: HEADERS, timeout: 15000 });
  return res.data;
}

function normalizeLinks(markdown) {
  return markdown.replace(
    /\[\s*\n+\s*#{1,6}\s*(.+?)\s*\n+\s*\]\(([^)]+)\)/g,
    (_, title, url) => `[${title.trim()}](${url})`
  );
}

export function htmlToMarkdown(html) {
  const $ = cheerio.load(html);
  const root = $("main").length ? $("main") : $("body");
  return normalizeLinks(turndown.turndown(root.html() || ""));
}
