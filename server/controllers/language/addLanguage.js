const { Language } = require('../../models');
const { addLangSchema } = require('../../utils/validation');

const createLanguage = async (req, res, next) => {
  try {
    const { name, shortcut, flag } = req.body;

    const { error, value } = await addLangSchema.validateAsync({
      name, shortcut, flag,
    }, { abortEarly: false });

    if (error) {
      throw new Error(error.message);
    }

    const data = await Language.create(value);
    res.status(200).json({
      message: 'language created successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createLanguage;
