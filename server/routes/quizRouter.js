const quizRouter = require('express').Router();
const { getQuiz, updateUserLevel } = require('../controllers');
const checkAuth = require('../middlewares/checkauth');

quizRouter.get('/:quizLanguage', checkAuth, getQuiz);
quizRouter.put('/level/:quizLanguage', checkAuth, updateUserLevel);

module.exports = quizRouter;
