const express = require('express')
const cors = require('cors');
const app = express()
const conDB = require('./db/connect.js');
require('dotenv').config();
const port = process.env.PORT || 3000;

// Auth0
const { auth } = require('express-openid-connect');
app.use(
    auth({
      authRequired: false,
      auth0Logout: true,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      baseURL: process.env.BASE_URL,
      clientID: process.env.CLIENT_ID,
      secret: process.env.SECRET,
      idpLogout: true,
    })
  );

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'))
  .use('/public', express.static('public'))
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