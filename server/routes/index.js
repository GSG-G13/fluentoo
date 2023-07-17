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
  findAllContacts,
  getAllFeedBack,
  addFeedBack,
  deleteFeedBack,
  updateFeedBack,
  totalRate,
  login,
  signUp,
  oauth,
  getQuiz,
  updateUserLevel,
} = require('../controllers');
const checkAuth = require('../middlewares/checkauth');
const { checkSenderReceiver } = require('../middlewares/checkSenderReceiver');
const uploadS3 = require('../s3');

router.get('/search', search);

router.route('/languages').get(getAllLanguages).post(createLanguage);

router.post('/login', login);
router.post('/signup', signUp);
router.post('/google', oauth);

router.post('/feedback/:commentingId', checkAuth, addFeedBack);
router.get('/feedback/:commentingId', getAllFeedBack);
router.get('/feedback/total/:commentingId', totalRate);
router.put('/feedback/:commentId', checkAuth, updateFeedBack);
router.delete('/feedback', checkAuth, deleteFeedBack);

router.get('/profile/:userId', getProfile);
router.post('/profile', checkAuth, createProfile);
router.put('/profile', checkAuth, updateProfile);

router.get('/message/:receiver', checkAuth, readMessage);
router.get('/message/contacts/:id', checkAuth, findAllContacts);
router.post('/message', checkAuth, checkSenderReceiver, createMessage);
router.patch(
  '/message/:id',
  checkAuth,
  checkSenderReceiver,
  updateMessage,
);
router.delete(
  '/message/:id',
  checkAuth,
  checkSenderReceiver,
  deleteMessage,
);
router.get('/s3url', uploadS3);

router.get('/quiz/:quizLanguage', checkAuth, getQuiz);
router.put('/quiz/level/:quizLanguage', checkAuth, updateUserLevel);

module.exports = router;
