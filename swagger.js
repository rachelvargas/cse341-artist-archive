const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Artist Archive',
    description: 'Team 3 - API project for CSE341'
  },
  host: 'valid-art.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
