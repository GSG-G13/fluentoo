const profileRouter = require('express').Router();
const { createProfile, updateProfile, getProfile } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

profileRouter.post('/', checkAuth, createProfile);
profileRouter.put('/', checkAuth, updateProfile);
profileRouter.get('/:userId', getProfile);
module.exports = profileRouter;
