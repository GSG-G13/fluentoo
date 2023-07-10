const { createMessage } = require('./createMessage');
const { readMessage } = require('./readMessage');
const { deleteMessage } = require('./deleteMessage');
const { updateMessage } = require('./updateMessage');
const { findAllContacts } = require('./findAllContacts');

module.exports = {
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
  findAllContacts,
};
