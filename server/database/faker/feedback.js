const { faker } = require('@faker-js/faker');

function createRandomFeedback() {
  return {
    comment: faker.lorem.words(),
    star: 3,
  };
}

const FEEDBACKS_RAND = faker.helpers.multiple(createRandomFeedback, {
  count: 5,
});

const FEEDBACKS = FEEDBACKS_RAND.map((feedback, index, feedbacks) => ({
  ...feedback,
  commenterId: index,
  commentingId: index !== feedbacks.length - 1 ? index + 1 : index - 1,
}));

module.exports = {
  FEEDBACKS,
};
