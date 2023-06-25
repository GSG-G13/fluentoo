const { faker } = require('@faker-js/faker');

function createRandomMessage() {
  return {
    content: faker.lorem.words(),
  };
}

const MESSAGES_RAND = faker.helpers.multiple(createRandomMessage, {
  count: 5,
});
const MESSAGES = MESSAGES_RAND.map((message, index, messages) => ({
  ...message,
  sender: index + 1,
  receiver: index !== messages.length - 1 ? index + 1 : index - 1,
}));

module.exports = {
  MESSAGES,
};
