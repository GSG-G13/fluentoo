/* eslint-disable no-undef */

const getAllLanguages = require('../controllers/language/getAllLanguages');
const sequelize = require('../database/config/connection');
const Language = require('../models/language');

describe('Language model', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  afterEach(async () => {
    await Language.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create a new language', async () => {
    const languageData = {
      name: 'English',
      shortcut: 'en',
      flag: '🇺🇸',
    };

    const createdLanguage = await Language.create(languageData);

    expect(createdLanguage.name).toBe(languageData.name);
    expect(createdLanguage.shortcut).toBe(languageData.shortcut);
    expect(createdLanguage.flag).toBe(languageData.flag);
  });

  it('should not allow null values', async () => {
    try {
      await Language.create({
        name: null,
        shortcut: null,
        flag: null,
      });
    } catch (error) {
      expect(error.message).toContain('name cannot be null');
      expect(error.message).toContain('shortcut cannot be null');
      expect(error.message).toContain('flag cannot be null');
    }
  });
});

describe('getAllLanguages', () => {
  it('should fetch all languages successfully', async () => {
    Language.findAll = jest.fn().mockResolvedValue(['English', 'Spanish', 'French']);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllLanguages(req, res);

    expect(Language.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(['English', 'Spanish', 'French']);
  });

  it('should handle errors when fetching languages', async () => {
    Language.findAll = jest.fn().mockRejectedValue(new Error('Database error'));

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAllLanguages(req, res);

    expect(Language.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'falid language' });
  });
});
