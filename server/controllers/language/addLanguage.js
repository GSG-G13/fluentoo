const Language = require('../../models/language');

const createLanguage = async (req, res) => {
  try {
    const { name, shortcut, flag } = req.body;
    const data = await Language.create({ name, shortcut, flag });
    res.status(200).json({
      message: 'language created successfully',
      data,
    });
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
  }
};

module.exports = createLanguage;
