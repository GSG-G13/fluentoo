const Mailgen = require('mailgen');

const genarateEmail = (name) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Fluentoo',
      link: 'https://mailgen.js/',
    },
  });
  const email = {
    body: {
      name,
      intro: "Welcome to Fluentoo! We're thrilled to have you join our language exchange platform.As a member, you now have access to a wealth of opportunities to enhance your language skills. Whether you're here to practice speaking a new language, connect with language partners, or explore cultural exchange, we're here to support you every step of the way. Feel free to explore our platform and discover exciting features such as live video chat with native speakers,and interactive language challenges.",
      outro: " Should you have any questions or need assistance, please don't hesitate to reach out. Our friendly support team is here to help!Once again, welcome aboard. We're excited to embark on this language learning journey with you! Best regards,",
    },
  };
  const emailBody = mailGenerator.generate(email);
  const emailText = mailGenerator.generatePlaintext(email);
  return { emailBody, emailText };
};
module.exports = genarateEmail;
