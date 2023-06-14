const feedBackRouter = require('express').Router();
const { addFeedBack } = require('../controllers/feedBack');
const checkAuth = require('../middlewares/checkauth');

feedBackRouter.post('/addFeedback', checkAuth, addFeedBack);

module.exports = feedBackRouter;
