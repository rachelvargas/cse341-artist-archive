// Artists Routes
// Metrics Routes
const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');

router.get('/', (req, res) => {
    res.send('Hey, this is the artists.js route');
});

module.exports = router;