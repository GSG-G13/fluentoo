const { Language } = require('../../models');
const { addLangSchema } = require('../../utils/validation');

const createLanguage = async (req, res, next) => {
  try {
    const language = await addLangSchema.validateAsync(req.body, { abortEarly: false });
    const data = await Language.create(language);
    res.json({
      message: 'language created successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createLanguage;
