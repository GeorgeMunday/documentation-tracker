import TurndownService from "turndown";

export const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (compatible; NewsScraperBot/1.0; +https://example.com/bot)",
};

export const turndown = new TurndownService({ headingStyle: "atx" });
