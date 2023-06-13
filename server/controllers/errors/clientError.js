const clientError = (req, res) => {
  res.status(404).json({
    msg: 'user not found',
    status: 404,
  });
};

module.exports = clientError;
