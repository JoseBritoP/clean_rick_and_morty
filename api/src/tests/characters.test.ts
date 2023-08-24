import { server } from '../index';
import request from 'supertest';
import { CharacterInterface,Location } from '../types/character';

describe('GET /character',()=>{
  describe('Success case',()=>{
    test('should respond with a 200 status code',async()=>{
      const response: request.Response = await request(server).get('/character');
      expect(response.status).toBe(200);
      expect(response.ok).toBe(true);
    });
    test('should return an array of episodes',async()=>{
      const response: request.Response = await request(server).get('/character');
      expect(response.body).toBeInstanceOf(Array);
    });
  })
});

describe('GET /character/id',()=>{
  describe('Character API',()=>{
    describe("Success case",()=>{
      test('should respond with a 200 status code',async()=>{
        const response = await request(server).get('/character/1').send();
        expect(response.status).toEqual(200);
        expect(response.ok).toBeTruthy();
      });
    });
    describe("Error case",()=>{
      const id = 1000
      test('should respond with a 404 status code', async ()=>{
        const response = await request(server).get(`/character/${id}`);
        expect(response.status).toBe(404);
      });
    })
  });
  describe('Character BDD',()=>{
    describe("Success case",()=>{
      const id = "8860c507-8bd9-40e4-90ca-75b8b7b9a0c0";
      test('should respond with a 200 status code',async()=>{
        const response = await request(server).get(`/character/${id}`).send();
        expect(response.status).toEqual(200);
        expect(response.ok).toBeTruthy();
      });
    })
  });
})
