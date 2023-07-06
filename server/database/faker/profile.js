const { faker } = require('@faker-js/faker');

function createRandomProfile() {
  return {
    gender: 'male',
    country: 'USA',
    birthDate: faker.date.past(),
    practiceLanguages: [faker.lorem.words()],
    spokenLanguages: [faker.lorem.words()],
    interests: [faker.lorem.words()],
    bio: faker.lorem.paragraph(),
    avatar: faker.image.avatar(),
  };
}

const PROFILES_RAND = faker.helpers.multiple(createRandomProfile, {
  count: 5,
});

const PROFILES = PROFILES_RAND.map((profile, index) => ({
  ...profile,
  user_id: index + 1,
}));

module.exports = { PROFILES };
