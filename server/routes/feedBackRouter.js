const feedBackRouter = require('express').Router();
const {
  getAllFeedBack, addFeedBack, updateFeedBack, deleteFeedBack, totalRate,
} = require('../controllers/feedBack');
const checkAuth = require('../middlewares/checkauth');

feedBackRouter.post('/:commentingId', checkAuth, addFeedBack);
feedBackRouter.get('/:commentingId', getAllFeedBack);
feedBackRouter.get('/total/:commentingId', totalRate);
feedBackRouter.put('/:commentId', checkAuth, updateFeedBack);
feedBackRouter.delete('/', checkAuth, deleteFeedBack);

module.exports = feedBackRouter;
