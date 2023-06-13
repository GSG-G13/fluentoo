const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');

router.use('/lang', languageRouter);
router.use('/auth', authRouter);

module.exports = router;
