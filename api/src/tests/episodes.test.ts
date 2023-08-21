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

describe('POST /episode',()=>{
  describe('Success case',()=>{
    test('should respond with a 201 status code',async()=>{
      const newEpisodeTest = {
        name: 'new episode Test',
        air_date: 'new episode Test',
        episode: 'new episode Test',
      };
      const response = await request(server).post('/episode').send(newEpisodeTest);
      expect(response.status).toBe(201);
      expect(response.ok).toBeTruthy();
      expect(response.ok).toBe(true);
    });

    test('should respond with a content-type of application/json in header',async()=>{
      const newEpisodeTest = {
        name: 'new episode Test two',
        air_date: 'new episode Test',
        episode: 'new episode Test',
      };
      const response = await request(server).post('/episode').send(newEpisodeTest);
      expect(response.header['content-type']).toEqual(expect.stringContaining('json'));
    });

    test('should respond with a json object containing the new episode on id',async()=>{
      const newEpisodeTest = {
        name: 'new episode Test three',
        air_date: 'new episode Test',
        episode: 'new episode Test',
      };

      const response = await request(server).post('/episode').send(newEpisodeTest);
      expect(response.body.id).toBeDefined();
    });
    test('should respond with a json object equality episode interface',async()=>{
      const newEpisodeTest = {
        name: 'new episode Test four',
        air_date: 'new episode Test',
        episode: 'new episode Test',
        } as EpisodeInterface;
        const response = await request(server).post('/episode').send(newEpisodeTest);
        expect(response.body).toMatchObject<EpisodeInterface>({
          id: expect.any(Number),
          name: expect.any(String),
          air_date: expect.any(String),
          episode: expect.any(String),
        });
    });
  });
  describe('Error case',()=>{
    test('should respond with a status 400 code if is missing data',async()=>{
      const fields = [
        {},
        {name:'Test episode'},
        {air_date:'Test air_date'},
        {episode: 'Test episode'},
        {name:'Test episode',air_date:'Test air_date'},
        {name:'Test episode',episode:"Test episode"},
        {air_date:'Test air_date',episode:'Test episode'}
      ];

      for (const body of fields){
        const response = await request(server).post('/episode').send(body);
        expect(response.status).toBe(400);
        expect(response.clientError).toBe(true);
      }
    });
    test('should respond with a message error if is missing data',async()=>{
      const episodeTest = [
        {
          name: 1,
          air_date :'testair_date',
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :1,
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :'testair_date',
          episode : 0
        },
      ]

      const episodeTesting = episodeTest.map(async(episode)=>{
        const response = await request(server).post('/episode').send(episode);
        expect(response.status).toBe(400);
        expect(response.clientError).toBe(true);
      });
      await Promise.all(episodeTesting);
    });
    test('should respond with a status 400 if the prop air_date is invalid',async()=>{
      const episodeTest = [
        {
          name: 1,
          air_date :'testair_date',
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :1,
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :'testair_date',
          episode : 0
        },
      ]

      const episodeTesting = episodeTest.map(async(episode)=>{
        const response = await request(server).post('/episode').send(episode);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
      })
      await Promise.all(episodeTesting)
    });
    test('should respond with a message error for invalidate prop air_date',async()=>{
      const episodeTest = [
        {
          name: 1,
          air_date :'testair_date',
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :1,
          episode :"testepisode"
        },
        {
          name:'Test episode',
          air_date :'testair_date',
          episode : 0
        },
      ]

      const episodeTesting = episodeTest.map(async(episode)=>{
        const response = await request(server).post('/episode').send(episode);
        expect(response.body.error).toMatchObject({
          issues: expect.any(Array),
          name: 'ZodError'
        });
      })
      await Promise.all(episodeTesting)
    });
    test('should respond with a message error in case the episode name already exist',async()=>{
      const episodeTest = {
        name: "Pilot",
        air_date: "December 2, 2013",
        episode: "S02E10"
      };

      const response = await request(server).post('/episode').send(episodeTest);
      expect(response.status).toBe(400);
      expect(response.clientError).toBe(true);
      // console.log(response.body.error)
      expect(response.body.error).toBe(`There is already exist a episode name: ${episodeTest.name}`)
    });
  });
});

describe('DELETE /episode',()=>{
  const id = 1;
  test('should change the property deleted of Episode to true',async()=>{
    const response = await request(server).delete(`/episode/${id}`).send()
    expect(response.status).toBe(200);
    expect(response.body.episode.deleted).toBe(true)
  });
  test('should respond with a message of status episode delete',async()=>{
    const response = await request(server).delete(`/episode/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`The Episode of id ${id} was successfully deleted`)
  })
  test(`should respond with a message of episode deleted like 'Don't exist the episode id: episodeId'`,async()=>{
    const response = await request(server).get(`/episode/${id}`).send();
    expect(response.status).toBe(404);
    expect(response.notFound).toBe(true);
    expect(response.body.error).toBe(`Don't exist the episode id: ${id}`);
  })
})