const router = require('express').Router();
const languageRouter = require('./languageRouter');
const authRouter = require('./auth');
const profileRouter = require('./profile');

router.use('/languages', languageRouter);
router.use('/auth', authRouter);
router.use('/profile', profileRouter);

module.exports = router;
