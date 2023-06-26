/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const sequelize = require('../database/connection');
const { User, Language } = require('../models');
require('dotenv').config();

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Signup tests', () => {
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

  it('should return validation error', async () => {
    const newUser = {
      email: 'basel2@gmail.com',
      username: 'aya',
      password: '123',
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('Password must be at least 8 characters long.');
  });

  it('should return email already exists error', async () => {
    jest.spyOn(User, 'findOne').mockImplementation(() => Promise.resolve({ email: 'existing@example.com' }));
    const newUser = {
      email: 'existing@example.com',
      username: 'aya',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('Email already exists');
    jest.spyOn(User, 'findOne').mockRestore();
  });
});

describe('Login tests', () => {
  it('should login successfully', async () => {
    const user = {
      email: 'basel@gmail.com',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/v1/auth/login').send(user);
    expect(response.body.status).toBe(200);
    expect(response.body.msg).toBe('login successfully');
  });
  it('should return validation error', async () => {
    const user = {
      email: 'basel@gmail.com',
      password: '123',
    };
    const response = await request(app).post('/api/v1/auth/login').send(user);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe(
      'Password must be at least 8 characters long.',
    );
  });
  it('should return email doesn\'t exists error', async () => {
    const user = {
      email: 'adalah@gmail.com',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/v1/auth/login').send(user);
    expect(response.body.status).toBe(401);
    expect(response.body.msg).toBe("Email doesn't exists");
  });
  it('should return password or email incorrect', async () => {
    const user = {
      email: 'basel@gmail.com',
      password: '123@adfsasfaasf',
    };
    const response = await request(app).post('/api/v1/auth/login').send(user);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('password or email incorrect');
  });
});

describe('Profile model', () => {
  it('should add user profile information', async () => {
    const newProfile = {
      gender: 'female',
      country: 'gaza',
      birthdate: '2002-1-25',
      practiceLanguages: ['English', 'Spanish'],
      spokenLanguages: ['French', 'German'],
      intrests: ['Reading', 'Traveling'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const newUser = {
      email: 'adalah@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const responseLogin = await request(app).post('/api/v1/auth/signup').send(newUser);
    const { token } = responseLogin.body;
    const response = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('profile created successfully');
  });
});

describe('Language model', () => {
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

afterAll(async () => {
  await sequelize.close();
});

/*
  * signup: done
    - should add a new user
    - should return validation error
    - should return email already exists error
  * login: done
    - should login successfully
    - should return validation error
    - should return email doesn't exists error
    - should return password or email incorrect
  * profile: in-progress
    - should add user profile information
    - should return validation error
    - should return the profile with the associated user
    - should pass the error to the next middleware
    ...
  * language: in-progress
    - should create a new language
    - should not allow null values
  * message: todo
  * feedback: todo
*/
