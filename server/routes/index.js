const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');
const feedBackRouter = require('./feedBackRouter');
const profileRouter = require('./profile');
const messageRouter = require('./message');
const communityRouter = require('./community');

router.use('/languages', languageRouter);
router.use('/auth', authRouter);
router.use('/feedback', feedBackRouter);
router.use('/profile', profileRouter);
router.use('/message', messageRouter);
router.use('/search', communityRouter);

module.exports = router;
