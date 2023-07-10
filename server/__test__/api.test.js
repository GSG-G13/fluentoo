/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const sequelize = require('../database/connection');
const { User, Language } = require('../models');
const seeder = require('../database/seed');

beforeAll(async () => {
  await seeder();
});

const newUser = {
  email: 'stm1998@hotmail.com',
  username: 'saleh',
  password: '512512512',
};

const loginUser = {
  email: 'stm1998@hotmail.com',
  password: '512512512',
};
const invalidUser = {
  ...loginUser,
  email: 'sadasd@hotmail.com',
};

const newProfile = {
  gender: 'female',
  country: 'gaza',
  birthDate: '2002-1-25',
  practiceLanguages: ['English', 'Spanish'],
  spokenLanguages: ['French', 'German'],
  interests: ['Reading', 'Traveling'],
  bio: 'I am a language enthusiast.',
  avatar: 'https://avatars.githubusercontent.com/u/62996589',
};

const { country, ...rest } = newProfile;

const invalidProfile = {
  ...rest,
};
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJzYWxlaCIsImVtYWlsIjoic3RtMTk5OEBob3RtYWlsLmNvbSIsImlhdCI6MTY4ODk5MTk4NX0.sgUMXDV-tt0r9NE3gD-QQw5YLCouaiYH_2aKgiATBNs';

describe('Signup tests', () => {
  it('should add a new user', async () => {
    const response = await request(app).post('/api/signup').send(newUser);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('Signup successfully');
  });

  it('should return validation error', async () => {
    const response = await request(app)
      .post('/api/signup')
      .send({ ...newUser, password: '123' });
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe(
      'Password must be at least 8 characters long.',
    );
  });

  it('should return email already exists error', async () => {
    jest
      .spyOn(User, 'findOne')
      .mockImplementation(() => Promise.resolve({ email: 'existing@example.com' }));
    const response = await request(app).post('/api/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('Email already exists');
    jest.spyOn(User, 'findOne').mockRestore();
  });
});

describe('Login tests', () => {
  it('should login successfully', async () => {
    const response = await request(app).post('/api/login').send(loginUser);
    expect(response.body.status).toBe(200);
    expect(response.body.msg).toBe('login successfully');
  });
  it('should return validation error', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ ...loginUser, password: '123' });
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe(
      'Password must be at least 8 characters long.',
    );
  });
  it("should return email doesn't exists error", async () => {
    const response = await request(app).post('/api/login').send(invalidUser);
    expect(response.body.status).toBe(401);
    expect(response.body.msg).toBe("Email doesn't exists");
  });
  // it('should return password or email incorrect', async () => {
  //   const response = await request(app)
  //     .post('/api/login')
  //     .send({ ...loginUser, password: 'eeeeeeeee' });
  //   expect(response.body.status).toBe(400);
  //   expect(response.body.msg).toBe('password or email incorrect');
  // });
});

describe('Profile endPoints', () => {
  it('should Create a profile successfully', async () => {
    const response = await request(app)
      .post('/api/profile')
      .set('Cookie', [`token=${userToken}`])
      .send(newProfile);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('profile created successfully');
  });
  it('should return validation error', async () => {
    const response = await request(app)
      .post('/api/profile')
      .set('Cookie', [`token=${userToken}`])
      .send(invalidProfile);
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
    const response = await request(app)
      .put('/api/profile')
      .set('Cookie', [`token=${userToken}`])
      .send(newProfile);
    expect(response.body.status).toBe(200);
    expect(response.body.msg).toBe('Profile updated successfully');
  });
  it('should return validation error in update profile', async () => {
    const response = await request(app)
      .put('/api/profile')
      .set('Cookie', [`token=${userToken}`])
      .send({ ...newProfile, interests: 'Music' });
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
