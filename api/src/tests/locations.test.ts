import { server } from '../index';
import request from 'supertest';
import { LocationInterface } from '../interfaces/location';

describe('/GET Location',()=>{
  test('should respond with a 200 status code',async()=>{
    const response: request.Response = await request(server).get('/location');
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true)
  });
  // it ('should return an array of locations', async () => {
  test('should return an array of locations',async()=>{
    const response: request.Response = await request(server).get('/location');
    // console.log(response.body)
    expect(response.body).toBeInstanceOf(Array);
  });
  test('should return an array of locations with instance contract',async()=>{
    const response:request.Response = await request(server).get('/location');
    const locations: LocationInterface[] = response.body;

    locations.forEach((location) => {
      expect(typeof location).toBe('object');
      expect(location).toMatchObject<LocationInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        type: expect.any(String),
        dimension: expect.any(String),
      });
    });
  });
});