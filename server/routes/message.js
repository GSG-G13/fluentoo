const profileRouter = require('express').Router();
const { createChat } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

profileRouter.post('/', checkAuth, createChat);

module.exports = profileRouter;
