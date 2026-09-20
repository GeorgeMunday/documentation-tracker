import { getSubscribers } from "./src/db.js";
import { sendEmail } from "./src/send_email.js";

async function main() {
    console.log("Starting monthly email sending...");
    const subscribers = await getSubscribers();
    for(const subscriber of subscribers) {
        await sendEmail({
            to: subscriber.email,
            subject: "Monthly Documentation Updates",
            html: "<p>Here are the latest updates...</p>"
        });
    }
}

main().catch((err) => {
  console.error("Email sending failed:", err.message);
  process.exit(1);
});