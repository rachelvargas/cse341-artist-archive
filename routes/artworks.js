// Artistworks Routes
const express = require('express');
const router = express.Router();
const artworks = require('../controllers/artworks');

// GET ALL ARTWORKS
router.get('/', artworks.getDB);

// CREATE NEW ARTWORK
router.post('/', (req, res) => {
    res.send('Hey, this is the artworks.js POST route');
});

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get((req, res) => {
    res.send('Hey, this is the artworks.js GET BY ID route');
})
.put((req, res) => {
    res.send('Hey, this is the artworks.js PUT route');
})
.delete((req, res) => {
    res.send('Hey, this is the artworks.js DELETE route');
})

module.exports = router;