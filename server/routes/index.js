const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const chatRouter = require('./chat');
const messageRouter = require('./message');

router.use('/languages', languageRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);
router.use('/chat', chatRouter);
router.use('/message', messageRouter);

module.exports = router;
