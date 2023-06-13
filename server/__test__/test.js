/* eslint-disable no-undef */

const getAllLanguages = require('../controllers/language/getAllLanguages');
const sequelize = require('../database/config/connection');
const Language = require('../models/language');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

// afterEach(async () => {
//   await Language.destroy({ where: {} });
// });

afterAll(async () => {
  await sequelize.close();
});
describe('Language model', () => {
  it('should create a new language', async () => {
    const languageData = {
      name: 'English',
      shortcut: 'en',
      flag: '🇺🇸',
    };

    const createdLanguage = await Language.create(languageData);
    console.log(createdLanguage);
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
      console.log(error, 'from null lang');
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
      status: jest.fn(() => res),
      json: jest.fn(),
    };
    const next = jest.fn();

    await getAllLanguages(req, res, next);

    expect(Language.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(['English', 'Spanish', 'French']);
    expect(next).not.toHaveBeenCalled();
  });
});
