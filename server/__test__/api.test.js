/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../app');
const { User } = require('../models');

describe('Sign up tests', () => {
  it('should add a new user', async () => {
    const newUser = {
      formData: {
        email: 'basel@gmail.com',
        username: 'aya',
        password: '123@Aaaaaaaa',
      },
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(201);
    expect(response.body.msg).toBe('Signup successfully');
  });

  it('should return validation error', async () => {
    const newUser = {
      formData: {
        email: 'basel2@gmail.com',
        username: 'aya',
        password: '123',
      },
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('Password must be at least 8 characters long.');
  });

  it('should return email already exists error', async () => {
    jest.spyOn(User, 'findOne').mockImplementation(() => Promise.resolve({ email: 'existing@example.com' }));
    const newUser = {
      formData: {
        email: 'existing@example.com',
        username: 'aya',
        password: '123@Aaaaaaaa',
      },
    };
    const response = await request(app).post('/api/v1/auth/signup').send(newUser);
    expect(response.body.status).toBe(400);
    expect(response.body.msg).toBe('Email already exists');
    User.findOne.mockRestore();
  });
});
