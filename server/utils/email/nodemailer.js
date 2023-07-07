const nodemailer = require('nodemailer');

const user = process.env.USER;
const pass = process.env.PASSWORD;
const port = process.env.PORT_STMP;
const sendEmail = async (to, subject, message, text) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port,
    secure: false,
    auth: {
      user,
      pass,
    },
  });
  await transporter.sendMail({
    from: user,
    to,
    subject,
    html: message,
    text,
  });
};
module.exports = sendEmail;
