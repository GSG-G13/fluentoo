const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');
const feedBackRouter = require('./feedBackRouter');

router.use('/languages', languageRouter);
router.use('/auth', authRouter);
router.use('/feedback', feedBackRouter);

module.exports = router;
