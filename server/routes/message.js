const messageRouter = require('express').Router();
const {
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
  findAllContacts,
} = require('../controllers');
const checkAuth = require('../middlewares/checkauth');
const { checkSenderReceiver } = require('../middlewares/checkSenderReceiver');

messageRouter.get('/:receiver', checkAuth, readMessage);
messageRouter.post('/', checkAuth, checkSenderReceiver, createMessage);
messageRouter.patch('/:id', checkAuth, checkSenderReceiver, updateMessage);
messageRouter.delete('/:id', checkAuth, checkSenderReceiver, deleteMessage);
messageRouter.get('/contacts/:id', checkAuth, findAllContacts);

module.exports = messageRouter;
