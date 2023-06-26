const profileRouter = require('express').Router();
const { createProfile, updateProfile, getProfile } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

profileRouter.post('/', checkAuth, createProfile);
profileRouter.put('/:profileId', checkAuth, updateProfile);
profileRouter.get('/:profileId', getProfile);
profileRouter.get('/', getProfile);
module.exports = profileRouter;
