import { getSubscribers } from "./src/db.js";

async function main() {
    console.log("Starting monthly email sending...");
    const subscribers = await getSubscribers();
    for(const subscriber of subscribers) {
        console.log("Sending email to:", subscriber.email);
    }
}

main().catch((err) => {
  console.error("Email sending failed:", err.message);
  process.exit(1);
});