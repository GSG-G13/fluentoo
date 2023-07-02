const CustomError = require('../utils/helper/CustomError');
const { verfiyToken } = require('../utils/jwt/jwt');

const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token) {
      throw new CustomError('unotherized', 401);
    }
    const decoded = await verfiyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = checkAuth;
