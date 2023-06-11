const languageRouter = require('express').Router();
const createLanguage = require('../controllers/language/addLanguage');
const getAllLanguages = require('../controllers/language/getAllLanguages');

languageRouter.post('/addLang', createLanguage);
languageRouter.get('/getAllLang', getAllLanguages);

module.exports = languageRouter;
