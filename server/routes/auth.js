const authRouter = require('express').Router();
const {
  login,
  signUp,
  oauth,
  profileData,
} = require('../controllers/User');
const checkAuth = require('../middlewares/checkauth');

authRouter.post('/login', login);
authRouter.post('/signup', signUp);
authRouter.post('/google', oauth);
authRouter.get('/profile', checkAuth, profileData);
module.exports = authRouter;
