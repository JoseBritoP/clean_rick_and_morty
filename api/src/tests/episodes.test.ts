import { server } from '../index';
import request from 'supertest';
import { EpisodeInterface } from '../interfaces/episode';

describe('/GET Episode',()=>{
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
});