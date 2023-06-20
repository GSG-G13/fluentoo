const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const messageRouter = require('./message');

router.use('/languages', languageRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/message', messageRouter);

module.exports = router;
