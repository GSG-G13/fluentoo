const profileRouter = require('express').Router();
const { createChat, getChat, getAllChats } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

profileRouter.post('/', checkAuth, createChat);
profileRouter.get('/:chatId', checkAuth, getChat);
profileRouter.get('/', checkAuth, getAllChats);

module.exports = profileRouter;
