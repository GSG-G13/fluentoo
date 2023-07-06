// todo: delete all files in server\routes folder except index.js
const router = require('express').Router();
const {
  search,
  createLanguage,
  getAllLanguages,
  getProfile,
  createProfile,
  updateProfile,
  readMessage,
  deleteMessage,
  updateMessage,
  createMessage,
} = require('../controllers');
const { login, signUp, oauth } = require('../controllers/User');
const {
  getAllFeedBack,
  addFeedBack,
  updateFeedBack,
  deleteFeedBack,
} = require('../controllers/feedBack');
const checkAuth = require('../middlewares/checkauth');
const { checkSenderReceiver } = require('../middlewares/checkSenderReceiver');

router.get('/search', search);
router.route('/languages').get(getAllLanguages).post(createLanguage);
router.post('/login', login);
router.post('/signup', signUp);
router.post('/google', oauth);
router.get('/feedback/:commentingId', getAllFeedBack);
router.get('/profile/:profileId', getProfile);
router.post('/feedback/:commentingId', checkAuth, addFeedBack);
router.put('/feedback/:commentId', checkAuth, updateFeedBack);
router.delete('/feedback/:commentId', checkAuth, deleteFeedBack);
router.post('/profile', checkAuth, createProfile);
router.put('/profile/:profileId', checkAuth, updateProfile);
router.get('/message/:receiver', checkAuth, readMessage);
router.post('/message', checkAuth, checkSenderReceiver, createMessage);
router.patch(
  '/message/:messageId',
  checkAuth,
  checkSenderReceiver,
  updateMessage,
);
router.delete(
  '/message/:messageId',
  checkAuth,
  checkSenderReceiver,
  deleteMessage,
);

module.exports = router;
