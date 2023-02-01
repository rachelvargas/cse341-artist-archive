const express = require('express')
const app = express()
const conDB = require('./db/connect.js');
require('dotenv').config();
const port = process.env.PORT || 3000;

conDB.connectDB();
app.use('/', require('./routes'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});