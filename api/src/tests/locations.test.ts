import { server } from '../index';
import request from 'supertest';
import { LocationInterface, LocationType } from '../types/location';

describe('GET /Location',()=>{
  describe('Success case',()=>{
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
      expect(response.body).toMatchObject<LocationInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        type: expect.any(String),
        dimension: expect.any(String),
      });
    });
    test('should respond with an object instance of Location',async()=>{
      const response = await request(server).get('/location/1').send();
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toMatchObject<LocationInterface>({
        id: expect.any(Number),
        name: expect.any(String),
        type: expect.any(String),
        dimension: expect.any(String),
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

describe('POST /Location',()=>{
  describe('Success case',()=>{
    test('should respond with a 201 status code',async()=>{
      const newLocationTest = {
        name: 'new Location Test',
        type: 'new Location Test',
        dimension: 'new Location Test',
      };
      const response = await request(server).post('/location').send(newLocationTest);
      expect(response.status).toBe(201);
      expect(response.ok).toBeTruthy();
      expect(response.ok).toBe(true);
    });
    test('should respond with a content-type of application/json in header',async()=>{
      const newLocationTest = {
        name: 'new Location Test two',
        type: 'new Location Test',
        dimension: 'new Location Test',
      };
      const response = await request(server).post('/location').send(newLocationTest);
      expect(response.header['content-type']).toEqual(expect.stringContaining('json'));
    });
    test('should respond with a json object containing the new location on id',async()=>{
      const newLocationTest = {
        name: 'new Location Test three',
        type: 'new Location Test',
        dimension: 'new Location Test',
      };

      const response = await request(server).post('/location').send(newLocationTest);
      expect(response.body.id).toBeDefined();
    });
    test('should respond with a json object equality Location interface',async()=>{
      const newLocationTest = {
        name: 'new Location Test four',
        type: 'new Location Test',
        dimension: 'new Location Test',
        } as LocationType;
        const response = await request(server).post('/location').send(newLocationTest);
        expect(response.body).toMatchObject<LocationInterface>({
          id: expect.any(Number),
          name: expect.any(String),
          type: expect.any(String),
          dimension: expect.any(String),
        });
    });
  });
  describe('Error case',()=>{
    test('should respond with a status 400 code if is missing data',async()=>{
      const fields = [
        {},
        {name:'Test Location'},
        {type:'Test type'},
        {dimension: 'Test dimension'},
        {name:'Test Location',type:'Test type'},
        {name:'Test Location',dimension:"Test Dimension"},
        {type:'Test Type',dimension:'Test Dimension'}
      ];

      for (const body of fields){
        const response = await request(server).post('/location').send(body);
        expect(response.status).toBe(400);
        expect(response.clientError).toBe(true);
      }
    });
    test('should respond with a message error if is missing data',async()=>{
      const locationTest = [
        {
          name: 1,
          type :'testType',
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :1,
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :'testType',
          dimension : 0
        },
      ]

      const locationTesting = locationTest.map(async(location)=>{
        const response = await request(server).post('/location').send(location);
        expect(response.status).toBe(400);
        expect(response.clientError).toBe(true);
      });
      await Promise.all(locationTesting);
    });
    test('should respond with a status 400 if the prop type is invalid',async()=>{
      const locationTest = [
        {
          name: 1,
          type :'testType',
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :1,
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :'testType',
          dimension : 0
        },
      ]

      const locationTesting = locationTest.map(async(location)=>{
        const response = await request(server).post('/location').send(location);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
      })
      await Promise.all(locationTesting)
    });
    test('should respond with a message error for invalidate prop type',async()=>{
      const locationTest = [
        {
          name: 1,
          type :'testType',
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :1,
          dimension :"testDimension"
        },
        {
          name:'Test location',
          type :'testType',
          dimension : 0
        },
      ]

      const locationTesting = locationTest.map(async(location)=>{
        const response = await request(server).post('/location').send(location);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
      })
      await Promise.all(locationTesting)
    });
    test('should respond with a message error in case the location name already exist',async()=>{
      const locationTest = {
        name: "Earth (C-137)",
        type: "Planet",
        dimension: "Dimension C-137"
      };

      const response = await request(server).post('/location').send(locationTest);
      expect(response.status).toBe(400);
      expect(response.clientError).toBe(true);
      // console.log(response.body.error)
      expect(response.body.error).toBe(`There is already a location name: ${locationTest.name}`)
    });
  });
});

describe('DELETE /location',()=>{
  const id = 1;
  test('should change the property deleted of location to true',async()=>{
    const response = await request(server).delete(`/location/${id}`).send()
    expect(response.status).toBe(200);
    expect(response.body.location.deleted).toBe(true)
  });
  test('should respond with a message of status location delete',async()=>{
    const response = await request(server).delete(`/location/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`The Location of id ${id} was successfully deleted`)
  })
  test(`should respond with a message of location deleted like 'Don't exist the location id: locationId'`,async()=>{
    const response = await request(server).get(`/location/${id}`).send();
    expect(response.status).toBe(404);
    expect(response.notFound).toBe(true);
    expect(response.body.error).toBe(`Don't exist the location id: ${id}`);
  })
})