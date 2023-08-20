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

describe('GET /episode/:id',()=>{
  describe('Success case',()=>{
    test('should respond with a 200 status code',async()=>{
      const response = await request(server).get('/episode/1').send();
      expect(response.status).toEqual(200);
      expect(response.ok).toBeTruthy();
    });
    test('should respond with an object with an object',async()=>{
      const response = await request(server).get('/episode/1').send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toMatchObject<EpisodeInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        air_date: expect.any(String),
        episode: expect.any(String),
      });
    });
    test('should respond with an object instance of episode',async()=>{
      const response = await request(server).get('/episode/1').send();
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
      const response = await request(server).get(`/episode/${id}`);
      expect(response.status).toBe(404);
    });
    test(`should response with a message error like: 'Don't exist the episode id: ${id}`,async()=>{
      const response = await request(server).get(`/episode/${id}`).send();
      expect(response.body.error).toBe(`Don't exist the episode id: ${id}`);
    });
    test("should respond with a message error like 'The id of episode must be a number'",async()=>{
      const idInvalidate = "3123asd"
      const response = await request(server).get(`/episode/${idInvalidate}`).send()
      expect(response.body.error).toBe(`The id of episode must be a number`)
    })
  });
});