const { faker } = require('@faker-js/faker');

function createRandomLanguage() {
  return {
    name: faker.lorem.words(),
    shortcut: faker.lorem.words(),
    flag: faker.image.avatar(),
  };
}

const LANGUAGES = faker.helpers.multiple(createRandomLanguage, {
  count: 5,
});

module.exports = {
  LANGUAGES,
};
