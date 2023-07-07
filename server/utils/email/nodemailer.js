const nodemailer = require('nodemailer');
const {
  user,
  password: pass,
  port,
} = require('../../config');

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
