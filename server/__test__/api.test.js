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

describe('Profile endPoints', () => {
  it('should Create a profile successfully', async () => {
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
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const response = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('profile created successfully');
  });
  it('should return validation error', async () => {
    const newProfile = {
      gender: 'male',
      birthdate: '2002-1-25',
      practiceLanguages: ['English', 'Spanish'],
      spokenLanguages: ['French', 'German'],
      intrests: ['Reading', 'Traveling'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const newUser = {
      email: 'adalah02@gmail.com',
      username: 'adalah02',
      password: '123@Aaaaaaaa',
    };
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const response = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"country" is required');
  });

  it('should return a profile', async () => {
    const response = await request(app).get('/api/v1/profile/1');
    expect(response.body.status).toBe(200);
    expect(response.body.data).toHaveProperty('user');
    expect(typeof response.body.data.user).toBe('object');
  });
  it('should pass the error Profile not found', async () => {
    const response = await request(app).get('/api/v1/profile/100');
    expect(response.body.status).toBe(404);
    expect(response.body.msg).toBe('Profile not found');
  });
  it('should return validation error', async () => {
    const response = await request(app).get('/api/v1/profile/abc');
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"profileId" must be a number');
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
      birthdate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      intrests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const responseCreateProfile = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    const { id } = responseCreateProfile.body.data;
    const updatedProfile = {
      ...newProfile,
      intrests: ['Reading', 'coding', 'Traveling'],
    };
    const response = await request(app)
      .put(`/api/v1/profile/${id}`)
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
      birthdate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      intrests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const responseCreateProfile = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    const { id } = responseCreateProfile.body.data;
    const updatedProfile = {
      ...newProfile,
      intrests: 'Traveling',
    };
    const response = await request(app)
      .put(`/api/v1/profile/${id}`)
      .set('Cookie', [`token=${token}`])
      .send(updatedProfile);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"intrests" must be an array');
  });
  it('should pass Profile not found on update with cheat user', async () => {
    const newUser = {
      email: 'adalah05@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const newProfile = {
      gender: 'male',
      country: 'Gaza',
      birthdate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      intrests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const updatedProfile = {
      ...newProfile,
      intrests: ['Reading', 'coding', 'Traveling'],
    };
    const response = await request(app)
      .put('/api/v1/profile/1001')
      .set('Cookie', [`token=${token}`])
      .send(updatedProfile);
    expect(response.body.status).toBe(404);
    expect(response.body.msg).toBe('Profile not found');
  });
  it('should pass validation error when update with cheat and wrong user id ', async () => {
    const newUser = {
      email: 'adalah06@gmail.com',
      username: 'adalah',
      password: '123@Aaaaaaaa',
    };
    const newProfile = {
      gender: 'male',
      country: 'Gaza',
      birthdate: '2000-5-25',
      practiceLanguages: ['English', 'German'],
      spokenLanguages: ['Arabic'],
      intrests: ['Reading', 'coding'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const responseSignup = await request(app)
      .post('/api/v1/auth/signup')
      .send(newUser);
    const { token } = responseSignup.body;
    const updatedProfile = {
      ...newProfile,
      intrests: ['Reading', 'coding', 'Traveling'],
    };
    const response = await request(app)
      .put('/api/v1/profile/abc')
      .set('Cookie', [`token=${token}`])
      .send(updatedProfile);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('"profileId" must be a number');
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
describe('community endpoints', () => {
  it('should return data based on the params', async () => {
    const name = 'aya';
    const spokenLanguages = ['French'];
    const response = await request(app).get(`/api/v1/search?name=${name}&spokenLanguages=${spokenLanguages}`);
    expect(response.status).toBe(200);
    expect(response.body.data[0].username).toEqual(name);
    expect(response.body.data[0].profile.spokenLanguages).toContain(
      spokenLanguages[0]
    );
  });
});
