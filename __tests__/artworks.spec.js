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
        await connection.close()
    }),

    it('responds to /artworks', async () => {
        const res = await request.get('/artworks');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to /artworks by Id', async () => {
        const res = await request.get('/artworks/63da565c0f1733e8520a26d2');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    }),

    it('responds to post /artworks', async () => {
        const res = await request.post('/artworks').send(    {
            pieceName : "Post",
            description: "Test",
            artistId : "",
            artist: "",
            style : "",
            genre : "",
            showing : "",
            date : "",
            picLink : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to put /artworks by ID ', async () => {
        const res = await request.put('/artworks/63e12b70eddf95811ec3a40b').send(    {
            pieceName : "Post",
            description: "Test",
            artistId : "updated",
            artist: "",
            style : "",
            genre : "",
            showing : "",
            date : "",
            picLink : ""
        });
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    }),

    it('responds to delete /artworks', async () => {
        const res = await request.delete('/artworks/63e12b70eddf95811ec3a40b');
        expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
        expect(res.statusCode).toBe(302)
    })


})