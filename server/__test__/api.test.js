/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const sequelize = require('../database/connection');

afterAll(async () => {
  await sequelize.close();
});
describe('Sign up tests', () => {
  it('should add a new user', async () => {
    const newUser = {
      email: 'basel@gmail.com',
      username: 'aya',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('Signup successfully');
  });

  // it('should return validation error', async () => {
  //   const newUser = {
  //     email: 'basel2@gmail.com',
  //     username: 'aya',
  //     password: '123',
  //   };
  //   const response = await request(app).post('/api/v1/auth/signup').send(newUser);
  //   expect(response.body.status).toBe(400);
  //   expect(response.body.msg).toBe('Password must be at least 8 characters long.');
  // });

//   it('should return email already exists error', async () => {
//     jest.spyOn(User, 'findOne').mockImplementation(() => 
//     Promise.resolve({ email: 'existing@example.com' }));
//     const newUser = {
//       email: 'existing@example.com',
//       username: 'aya',
//       password: '123@Aaaaaaaa',
//     };
//     const response = await request(app).post('/api/v1/auth/signup').send(newUser);
//     expect(response.body.status).toBe(400);
//     expect(response.body.msg).toBe('Email already exists');
//     User.findOne.mockRestore();
//   });
});
// describe('profile endpoints', () => {
//   it('should add user profile information', async () => {
//     const newProfile = {
//       gender: 'female',
//       country: 'gaza',
//       birthdate: '2002-1-25',
//       practiceLanguages: ['English', 'Spanish'],
//       spokenLanguages: ['French'],
//       intrests: ['Reading', 'Traveling'],
//       bio: 'I am a language enthusiast.',
//       avatar: 'https://example.com/avatar.jpg',
//     };
//     const newUser = {
//       email: 'basel@gmail.com',
//       password: '123@Aaaaaaaa',
//     };
//     const responseLogin = await request(app).post('/api/v1/auth/login').send(newUser);
//     const { token } = responseLogin.body;
//     const response = await request(app)
//       .post('/api/v1/profile')
//       .set('Cookie', [`token=${token}`])
//       .send(newProfile);
//     expect(response.body.status).toBe(201);
//     expect(response.body.msg).toBe('profile created successfully');
//   });
// });
/*
const getAllLanguages = require('../controllers/language/getAllLanguages');
const sequelize = require('../database/connection');
const Language = require('../models/language');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

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

*/
