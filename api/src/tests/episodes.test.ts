import { server } from '../index';
import request from 'supertest';
import { EpisodeInterface } from '../types/episode';

describe('GET /Episode',()=>{
  describe('Success case',()=>{
    test('should respond with a 200 status code',async()=>{
      const response: request.Response = await request(server).get('/episode');
      expect(response.status).toBe(200);
      expect(response.ok).toBe(true);
    });
    test('should return an array of episodes',async()=>{
      const response: request.Response = await request(server).get('/episode');
      expect(response.body).toBeInstanceOf(Array);
    });
    test('should return an array of episodes with a interface Episode',async()=>{
      const response: request.Response = await request(server).get('/episode');
      const episodes: EpisodeInterface[] = response.body;
      episodes.forEach((episode)=>{
        expect(typeof episode).toBe('object');
        expect(episode).toMatchObject<EpisodeInterface>({
          id: expect.any(Number),
          name: expect.any(String),
          air_date: expect.any(String),
          episode: expect.any(String)
        })
      })
    });
  })
});

describe('GET /location/:id',()=>{
  describe('Success case',()=>{
    test('should respond with a 200 status code',async()=>{
      const response = await request(server).get('/location/1').send();
      expect(response.status).toEqual(200);
      expect(response.ok).toBeTruthy();
    });
    test('should respond with an object with an object',async()=>{
      const response = await request(server).get('/location/1').send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toMatchObject<EpisodeInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        air_date: expect.any(String),
        episode: expect.any(String),
      });
    });
    test('should respond with an object instance of Location',async()=>{
      const response = await request(server).get('/location/1').send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toMatchObject<EpisodeInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        air_date: expect.any(String),
        episode: expect.any(String),
      });
    });
  });
  describe('Error case',()=>{
    const id = 1000
    test('should respond with a 404 status code', async ()=>{
      const response = await request(server).get(`/location/${id}`);
      expect(response.status).toBe(404);
    });
    test(`should response with a message error like: 'Don't exist the location id: ${id}`,async()=>{
      const response = await request(server).get(`/location/${id}`);
      expect(response.body.error).toBe(`Don't exist the location id: ${id}`);
    });
  });
});