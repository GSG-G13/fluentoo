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
