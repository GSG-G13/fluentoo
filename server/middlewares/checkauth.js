const CustomError = require('../utils/helper/CustomError');
const { verifyToken } = require('../utils/jwt/jwt');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      throw new CustomError('unauthorized', 401);
    }
    const decoded = await verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = checkAuth;
