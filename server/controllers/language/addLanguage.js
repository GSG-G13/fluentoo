const Language = require('../../models/language');

const createLanguage = (req, res) => {
  const { name, shortcut, flag } = req.body;
  Language.create({ name, shortcut, flag })
    .then((data) => res.status(200).json({
      message: 'language created successfully',
      data,
    }))
    .catch((err) => res.status(500).send(`Server error: ${err}`));
};

module.exports = createLanguage;
