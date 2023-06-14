const authRouter = require('express').Router();
const { login, signUp, oauth } = require('../controllers/User');

authRouter.post('/login', login);
authRouter.post('/signup', signUp);
authRouter.post('/google', oauth);
module.exports = authRouter;
