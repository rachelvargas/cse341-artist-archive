const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const app = require('../server')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)

describe('GET, GET by id, POST, PUT, DELETE', () => {
    let connection;
    let db;

    beforeAll(async () => {

        connection = await MongoClient.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db('artistarchive');
    });
    afterAll(async() => {
        await connection.close();
      
    }),

    it('responds to /showtimes', async () => {
        const res = await request.get('/showtimes');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to /showtimes by Id', async () => {
        const res = await request.get('/showtimes/63da59f90f1733e8520a26d7');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to post /showtimes', async () => {
        const res = await request.post('/showtimes').send(    {
            artist : "Post",
            artistId : "Test",
            currentlyShowing : "",
            openingDate: "",
            closingDate : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to put /showtimes by ID ', async () => {
        const res = await request.put('/showtimes/63da59f90f1733e8520a26d7').send(    {
            artist : "Post",
            artistId : "Test",
            currentlyShowing : "",
            openingDate: "",
            closingDate : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to delete /showtimes', async () => {
        const res = await request.delete('/showtimes/63e230f875fd2375122216c8');
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    })


})