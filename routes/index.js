const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hey, this is the index.js route');
});

module.exports = routes