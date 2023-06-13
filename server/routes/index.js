const router = require('express').Router();
const languageRouter = require('./languageRouter');

router.use('/lang', languageRouter);

module.exports = router;
