const net = require("net");
// run this script to check SMTP connections. This file should remain hidden form the repo
const client = net.createConnection(
  { host: "smtp-mail.outlook.com", port: 587 },
  () => {
    console.log("Connected to SMTP server!");
    client.end();
  }
);

client.on("error", (err) => {
  console.error("Connection error:", err);
});

// results: tried with 465 and it timed out, but 587 works!
