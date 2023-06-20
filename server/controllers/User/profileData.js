const profileData = async (req, res) => {
  res.status(200).json({
    msg: 'user found',
    status: 200,
    data: {
      id: req.user.id,
      username: req.user.username,
    },
  });
};

module.exports = { profileData };
