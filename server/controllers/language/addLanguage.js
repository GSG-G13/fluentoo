const { Language } = require('../../models');

const createLanguage = async (req, res, next) => {
  try {
    const { name, shortcut, flag } = req.body;
    const data = await Language.create({ name, shortcut, flag });
    res.status(200).json({
      message: 'language created successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createLanguage;
