const { faker } = require('@faker-js/faker');

function createRandomUser() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const USERS = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

module.exports = {
  USERS,
};
