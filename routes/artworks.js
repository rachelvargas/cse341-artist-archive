// Artistworks Routes
// Metrics Routes
const express = require('express');
const router = express.Router();
const artworks = require('../controllers/artworks');

router.get('/', (req, res) => {
    res.send('Hey, this is the artworks.js route');
});

module.exports = router;