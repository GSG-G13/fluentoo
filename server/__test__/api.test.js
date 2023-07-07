/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const sequelize = require('../database/connection');
const { User, Language } = require('../models');
const seeder = require('../database/seed');
require('dotenv').config();

beforeAll(async () => {
  await seeder();
});

describe('Signup tests', () => {
  it('should add a new user', async () => {
    const newUser = {
      email: 'basel@gmail.com',
      username: 'aya',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/signup').send(newUser);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('Signup successfully');
  });

  it('should return validation error', async () => {
    const newUser = {
      email: 'basel2@gmail.com',
      username: 'aya',
      password: '123',
    };
    const response = await request(app).post('/api/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe(
      'Password must be at least 8 characters long.',
    );
  });

  it('should return email already exists error', async () => {
    jest
      .spyOn(User, 'findOne')
      .mockImplementation(() => Promise.resolve({ email: 'existing@example.com' }));
    const newUser = {
      email: 'existing@example.com',
      username: 'aya',
      password: '123@Aaaaaaaa',
    };
    const response = await request(app).post('/api/signup').send(newUser);
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
    const response = await request(app).post('/api/login').send(user);
    expect(response.body.status).toBe(200);
    expect(response.body.msg).toBe('login successfully');
  });
  it('should return validation error', async () => {
    const user = {
      email: 'basel@gmail.com',
      password: '123',
    };
    const response = await request(app).post('/api/login').send(user);
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
    const response = await request(app).post('/api/login').send(user);
    expect(response.body.status).toBe(401);
    expect(response.body.msg).toBe('Email doesn\'t exists');
  });
  it('should return password or email incorrect', async () => {
    const user = {
      email: 'basel@gmail.com',
      password: '123@adfsasfaasf',
    };
    const response = await request(app).post('/api/login').send(user);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('password or email incorrect');
  });
});

describe('Profile endPoints', () => {
  it('should Create a profile successfully', async () => {
    const newProfile = {
      gender: 'female',
      country: 'gaza',
      birthDate: '2002-1-25',
      practiceLanguages: ['English', 'Spanish'],
      spokenLanguages: ['French', 'German'],
      interests: ['Reading', 'Traveling'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const newUser = {
      email: 'adalah@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const responseSignup = await request(app)
      .post('/api/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const response = await request(app)
      .post('/api/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('profile created successfully');
  });
  it('should return validation error', async () => {
    const newProfile = {
      gender: 'male',
      birthDate: '2002-1-25',
      practiceLanguages: ['English', 'Spanish'],
      spokenLanguages: ['French', 'German'],
      interests: ['Reading', 'Traveling'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const newUser = {
      email: 'adalah02@gmail.com',
      username: 'adalah02',
      password: '123@Aaaaaaaa',
    };
    const responseSignup = await request(app)
      .post('/api/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const response = await request(app)
      .post('/api/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"country" is required');
  });

  it('should return a profile', async () => {
    const response = await request(app).get('/api/profile/1');
    expect(response.body.status).toBe(200);
    expect(typeof response.body.data).toBe('object');
  });

  it('should pass the error Profile not found', async () => {
    const response = await request(app).get('/api/profile/521');
    expect(response.body.status).toBe(404);
    expect(response.body.msg).toBe('Profile not found');
  });
  it('should return validation error', async () => {
    const response = await request(app).get('/api/profile/abc');
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"userId" must be a number');
  });

  it('should update a profile successfully', async () => {
    const newUser = {
      email: 'adalah03@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const newProfile = {
      gender: 'male',
      country: 'Gaza',
      birthDate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      interests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    await request(app)
      .post('/api/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    const updatedProfile = {
      ...newProfile,
      interests: ['Reading', 'coding', 'Traveling'],
    };
    const response = await request(app)
      .put('/api/profile')
      .set('Cookie', [`token=${token}`])
      .send(updatedProfile);
    expect(response.body.status).toBe(200);
    expect(response.body.msg).toBe('Profile updated successfully');
  });
  it('should return validation error in update profile', async () => {
    const newUser = {
      email: 'adalah04@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const newProfile = {
      gender: 'male',
      country: 'Gaza',
      birthDate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      interests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const updatedProfile = {
      ...newProfile,
      interests: 'Traveling',
    };
    const response = await request(app)
      .put('/api/profile')
      .set('Cookie', [`token=${token}`])
      .send(updatedProfile);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"interests" must be an array');
  });
});

describe('Language endPoints', () => {
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
// describe('community endpoints', () => {
//   it('should return data based on the params', async () => {
//     const name = 'adalah';
//     const spokenLanguages = ['Arabic'];
//     const response = await request(app).get(
//       `/search?name=${name}&spokenLanguages=${spokenLanguages}`,
//     );
//     expect(response.status).toBe(200);
//     expect(response.body.data[0].username).toEqual(name);
//     expect(response.body.data[0].profile.spokenLanguages).toContain(
//       spokenLanguages[0],
//     );
//   });
// });
