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

    it('responds to /artists', async () => {
        const res = await request.get('/artists');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to /artists by Id', async () => {
        const res = await request.get('/artists/63da55bc0f1733e8520a26d1');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to post /artists', async () => {
        const res = await request.post('/artists').send(    {
            firstName: "Post",
            lastName: "Test",
            overallGenre: "posttestforjest",
            showing: "",
            metrics : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to put /artists by ID ', async () => {
        const res = await request.put('/artists/63da55bc0f1733e8520a26d1').send(    {
            firstName: "Test",
            lastName: "User",
            overallGenre: "updated",
            showing: "",
            metrics : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to delete /artists', async () => {
        const res = await request.delete('/artists/63da55bc0f1733e8520a26d1');
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    })


})
