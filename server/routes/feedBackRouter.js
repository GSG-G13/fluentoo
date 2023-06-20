const feedBackRouter = require('express').Router();
const {
  getAllFeedBack, addFeedBack, updateFeedBack, deleteFeedBack,
} = require('../controllers/feedBack');
const checkAuth = require('../middlewares/checkauth');

feedBackRouter.post('/:commentingId', checkAuth, addFeedBack);
feedBackRouter.get('/:commentingId', getAllFeedBack);
feedBackRouter.put('/:commentId', checkAuth, updateFeedBack);
feedBackRouter.delete('/', checkAuth, deleteFeedBack);

module.exports = feedBackRouter;
