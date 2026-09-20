import { getSubscribers } from "./src/db.js";

async function main() {
    console.log("sendEmail function called");
    const subscribers = await getSubscribers();
    console.log("Subscribers found:", subscribers.length);
}

main().catch((err) => {
  console.error("Email sending failed:", err.message);
  process.exit(1);
});