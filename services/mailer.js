const Mailgun = require("mailgun-js");
const config = require("config");

const mgDomain = config.get("mgDomain");
const mgAPIKey = config.get("mgAPIKey");

const mail = async (html, subject, email, sender, tags) => {
  const mailgun = new Mailgun({ apiKey: mgAPIKey, domain: mgDomain });

  const data = {
    from: sender,
    to: email,
    subject: subject,
    html: html,
  };

  const newObj = { ...data, ...tags };

  try {
    await mailgun.messages().send(newObj);
    console.log(`Mail was sent successfully to ${email}`);
    return true;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = mail;
