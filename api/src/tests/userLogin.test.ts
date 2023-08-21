import { server } from '../index';
import request from 'supertest';
import { UserTest } from '../types/user';

describe('Auth /login',()=>{
  describe('Success case',()=>{
    // it ('should return a token and user info if the credentials are correct ', async () => {
      const userCredentials = {
        email: "donpepito@gmail.com",
	      password: "pass123"
      };
      test("should return a 200 status code if the credentials are correct",async()=>{
        const response = await request(server).post("/auth/login").send(userCredentials);
        expect(response.status).toBe(200)
        expect(response.ok).toBeTruthy();
      });
      test("should return a token and user info if the credentials are correct",async()=>{
        const response = await request(server).post("/auth/login").send(userCredentials);
        expect(response.status).toBe(200);
        expect(response.body.token).toBeDefined();
        expect(response.body.user).toBeDefined();
      });
  });
  describe('Error case',()=>{
    test("should respond with a message in case the email not found",async()=>{
      const userCredentialsError = {
        email: "donpepitoasddddddddddddwadwa@gmail.com",
        password: "pass123" 
      }
      const response = await request(server).post("/auth/login").send(userCredentialsError);
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(`Email not found`)
    });
    test("should respond with a message in case of wrong password ",async()=>{
      const userCredentialsError = {
        email: "donpepito@gmail.com",
        password: "pass1234" 
      }
      const response = await request(server).post("/auth/login").send(userCredentialsError);
      expect(response.status).toBe(400);
      expect(response.body.error).toBe(`The password is incorrect`)
    });
    test("should respond with a message in case the email or password missing",async ()=>{
      const usersCredentailsError = [
        {
          email: "email@gmail.com"
        },
        {
          password: "password123"
        },
        {}
      ];

      const usersCredentailsErrorTesting = usersCredentailsError.map(async(newUser)=>{
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
      await Promise.all(usersCredentailsErrorTesting)
    
    });
    test("should respond with a message in case the email or password format are invalid",async()=>{
      const usersCredentailsError = [
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

      const usersCredentailsErrorTesting = usersCredentailsError.map(async(newUser)=>{
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
      await Promise.all(usersCredentailsErrorTesting);
    });
  });
})