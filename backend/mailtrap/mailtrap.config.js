const { MailtrapClient } = require("mailtrap");
require("dotenv").config();

module.exports.mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

module.exports.sender = {
  email: "hello@demomailtrap.com",
  name: "Likson",
};
// const recipients = [
//   {
//     email: "wpsalinakhatun@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
