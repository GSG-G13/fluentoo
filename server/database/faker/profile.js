const { faker } = require('@faker-js/faker');

function createRandomProfile() {
  return {
    gender: 'male',
    country: 'USA',
    birthdate: faker.date.past(),
    practiceLanguages: [faker.lorem.words()],
    spokenLanguages: [faker.lorem.words()],
    intrests: [faker.lorem.words()],
    bio: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  };
}

const PROFILES = faker.helpers.multiple(createRandomProfile, {
  count: 5,
});

module.exports = { PROFILES };
