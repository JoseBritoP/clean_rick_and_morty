import { server } from '../index';
import request from 'supertest';

describe('Auth /register',()=>{
  describe('Success case',()=>{
    test('should respond with a 201 status code',async()=>{
      const newUser = {
        "email": "test@gmail.com",
        "password": "passwordTesting1"
      }
      const response = await request(server).post('/auth/register').send(newUser);
      expect(response.status).toBe(201)
      expect(response.ok).toBe(true);
    })

    test("should respond with a message like 'User register successfully' is credentials are ok",async()=>{
      const newUser = {
        email: "testtwo@gmail.com",
        password: "passwordTesting1"
      };
      const response = await request(server).post('/auth/register').send(newUser);
      expect(response.status).toBe(201)
      expect(response.ok).toBeTruthy();
      expect(response.ok).toBe(true);
      expect(response.body.message).toBe('User register successfully')
    })
  });
  describe('Error case',()=>{
    test("should respond with a message in case the email already use",async()=>{
      const newUser = {
        email: "testtwo@gmail.com",
        password: "passwordTesting1"
      };
      const response = await request(server).post("/auth/register").send(newUser);
      expect(response.status).toBe(400)
      expect(response.clientError).toBe(true);
      expect(response.body.error).toBe(`The email ${newUser.email} already used`)
    });
    test("should respond with a message in case the email or password missing",async ()=>{
      const newUsers = [
        {
          email: "email@gmail.com"
        },
        {
          password: "password123"
        },
        {}
      ];

      const newUsersTesting = newUsers.map(async(newUser)=>{
        const response = await request(server).post('/auth/register').send(newUser);
        const message = response.body.error.issues.map((prop:any)=> prop.message);
        const onlyMessageText = message[0]
        expect(response.status).toBe(400);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
        expect(onlyMessageText).toBeDefined();
      });
      await Promise.all(newUsersTesting)
    
    });
    test("should respond with a message in case the email or password format are invalid",async()=>{
      const newUsers = [
        {
          email: "correo@@@mail.com",
          password: "passwordTesting1",
        },
        {
          email: "correo@gmail.com",
          password: "password"
        },
        {
          email: "correo@gmail.com",
          password: 2
        },
        {
          email: "correo@gmail.com",
          password: "12345"
        }
      ];

      const newUsersTesting = newUsers.map(async(newUser)=>{
        const response = await request(server).post("/auth/register").send(newUser);
        // console.log(response.body.error.issues.map((prop:any)=> prop.message))
        // console.log(response.body.error.issues.map((prop:any)=> prop.message))
        const message = response.body.error.issues.map((prop:any)=> prop.message);
        const onlyMessageText = message[0]
        // console.log(onlyMessageText)
        expect(response.status).toBe(400);
        expect(response.body.error).toMatchObject({
          issues:expect.any(Array),
          name: 'ZodError'
        });
        expect(onlyMessageText).toBeDefined();
      });
      await Promise.all(newUsersTesting);
    });
  });
});