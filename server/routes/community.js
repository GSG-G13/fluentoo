const communityRouter = require('express').Router();
const { search } = require('../controllers');

communityRouter.get('/search', search);

module.exports = communityRouter;
