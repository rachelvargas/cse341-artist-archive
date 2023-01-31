// Showtimes Routes
const express = require('express');
const router = express.Router();
const showtimes = require('../controllers/showtimes');

// GET ALL SHOWTIMES
router.get('/', (req, res) => {
    res.send('Hey, this is the showtimes.js route');
});

// CREATE NEW SHOWTIME
router.post('/', (req, res) => {
    res.send('Hey, this is the showtimes.js POST route');
});

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get((req, res) => {
    res.send('Hey, this is the showtimes.js POST route');
})
.put((req, res) => {
    res.send('Hey, this is the showtimes.js PUT route');
})
.delete((req, res) => {
    res.send('Hey, this is the showtimes.js DELETE route');
})
module.exports = router;