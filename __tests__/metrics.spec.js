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

    it('responds to /metrics', async () => {
        const res = await request.get('/metrics');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to /metrics by Id', async () => {
        const res = await request.get('/metrics/63e4b64f018ccbec0681ba8f');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to post /metrics', async () => {
        const res = await request.post('/metrics').send(    {
            artist : "Post",
            artistId : "Test",
            overallSales : "",
            criticRemarks : "",
            exhibitTurnOut : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to put /metrics by ID ', async () => {
        const res = await request.put('/metrics/63e4b64f018ccbec0681ba8f').send(    {
            artist : "Put",
            artistId : "Test",
            overallSales : "",
            criticRemarks : "",
            exhibitTurnOut : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to delete /metrics', async () => {
        const res = await request.delete('/metrics/63e4b64f018ccbec0681ba8f');
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    })


})