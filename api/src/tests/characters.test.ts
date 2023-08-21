import { server } from '../index';
import request from 'supertest';
import { CharacterInterface,Location } from '../types/character';

describe('GET /Episode',()=>{
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
