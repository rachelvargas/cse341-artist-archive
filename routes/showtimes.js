// Showtimes Routes
// Metrics Routes
const express = require('express');
const router = express.Router();
const showtimes = require('../controllers/showtimes');

router.get('/', (req, res) => {
    res.send('Hey, this is the showtimes.js route');
});

module.exports = router;