/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { User } = require('../models');

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
    User.findOne.mockRestore();
  });
});
describe('profile endpoints', () => {
  it('should add user profile information', async () => {
    const newProfile = {
      gender: 'female',
      country: 'gaza',
      birthdate: '2002-1-25',
      practiceLanguages: ['English', 'Spanish'],
      spokenLanguages: ['French'],
      intrests: ['Reading', 'Traveling'],
      bio: 'I am a language enthusiast.',
      avatar: 'https://example.com/avatar.jpg',
    };
    const newUser = {
      email: 'basel@gmail.com',
      password: '123@Aaaaaaaa',
    };
    const responseLogin = await request(app).post('/api/v1/auth/login').send(newUser);
    const { token } = responseLogin.body;
    const response = await request(app)
      .post('/api/v1/profile')
      .set('Cookie', [`token=${token}`])
      .send(newProfile);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('profile created successfully');
  });
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
