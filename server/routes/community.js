const communityRouter = require('express').Router();
const { search } = require('../controllers');

communityRouter.get('/', search);

module.exports = communityRouter;
