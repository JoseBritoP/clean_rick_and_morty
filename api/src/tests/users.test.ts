import { server } from '../index';
import request from 'supertest';

describe('Auth /register',()=>{
  describe('Success case',()=>{
    test('should respond with a 201 status code',async()=>{
      const newUser = {
        "email": "test@gmail.com",
        "password": "passwordTesting"
      }
      const response = await request(server).post('/auth/register').send(newUser);
      expect(response.status).toBe(201)
      expect(response.ok).toBe(true);
    })

    test("should respond with a message like 'User register successfully' is credentials are ok",async()=>{
      const newUser = {
        email: "testtwo@gmail.com",
        password: "passwordTesting"
      };
      const response = await request(server).post('/auth/register').send(newUser);
      expect(response.status).toBe(201)
      expect(response.ok).toBeTruthy();
      expect(response.ok).toBe(true);
      expect(response.body.message).toBe('User register successfully')
    })
  });
  describe('Error case',()=>{});
})
describe('Auth /login',()=>{
  describe('Success case',()=>{});
  describe('Error case',()=>{});
})