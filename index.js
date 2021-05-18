const genTemplate = require("./services/genTemplate");
const mailer = require("./services/mailer");
const config = require("config");
const csv = require("csv-parser");
const fs = require("fs");

const sender = config.get("sender");
const title = config.get("title");
const body = config.get("body");
const tags = config.get("tags");

const main = async () => {
  const html = genTemplate(title, body);

  const emails = [];

  fs.createReadStream("./csvs/email_list.csv")
    .pipe(csv(["email"]))
    .on("data", (data) => emails.push(data))
    .on("end", async () => {
      for (const email of emails) {
        console.log(email.email);
        await mailer(html, title, email.email, sender, tags);
      }
    });
};

main();
