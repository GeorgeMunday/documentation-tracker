async function main() {
    console.log("sendEmail function called");
}

main().catch((err) => {
  console.error("Email sending failed:", err.message);
  process.exit(1);
});