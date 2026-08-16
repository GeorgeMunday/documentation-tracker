export function cleanText(text) {
  return text
    .split("\n")
    .map((line) => line.replace(/^\s*[-*]\s+/, ""))
    .join(" ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function parseLooseDate(dateStr) {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const d = new Date(cleaned);
  return Number.isNaN(d.getTime()) ? new Date() : d;
}
