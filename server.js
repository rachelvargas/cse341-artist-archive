const express = require('express')
const cors = require('cors');
const app = express()
const conDB = require('./db/connect.js');
require('dotenv').config();
const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })

conDB.connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = app;