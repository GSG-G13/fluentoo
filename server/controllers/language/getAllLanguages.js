const Language = require('../../models/language');

const getAllLanguages = async (req, res) => {
  try {
    const language = await Language.findAll();
    res.status(200).json(language);
  } catch (error) { res.status(500).json({ error: 'falid language' }); }
};

module.exports = getAllLanguages;
