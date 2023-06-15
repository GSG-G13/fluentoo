const profileRouter = require('express').Router();
const { createProfile, updateProfile, getProfile } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

profileRouter.post('/profile', checkAuth, createProfile);
profileRouter.put('/profile/:profileId', checkAuth, updateProfile);
profileRouter.get('/profile/:profileId', getProfile);
module.exports = profileRouter;
