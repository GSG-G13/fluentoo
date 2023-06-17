const feedBackRouter = require('express').Router();
const {
  getAllFeedBack, addFeedBack, updateFeedBack, deleteFeedBack,
} = require('../controllers/feedBack');
const checkAuth = require('../middlewares/checkauth');

feedBackRouter.post('/addFeedback/:commentingId', checkAuth, addFeedBack);
feedBackRouter.get('/allFeedback/:commentingId', getAllFeedBack);
feedBackRouter.put('/editFeedback/:commentId', checkAuth, updateFeedBack);
feedBackRouter.delete('/deleteFeedback', checkAuth, deleteFeedBack);

module.exports = feedBackRouter;
