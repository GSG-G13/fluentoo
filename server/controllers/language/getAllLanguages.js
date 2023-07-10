const { Language } = require('../../models');

const getAllLanguages = async (req, res, next) => {
  try {
    const language = await Language.findAll();
    res.json(language);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllLanguages;
