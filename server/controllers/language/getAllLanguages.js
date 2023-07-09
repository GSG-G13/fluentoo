const { Language } = require('../../models');

const getAllLanguages = async (req, res, next) => {
  try {
    const languages = await Language.findAll();
    res.json({
      msg: 'Languages Returned Successfully',
      status: 200,
      data: languages,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllLanguages;
