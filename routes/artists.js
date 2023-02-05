// Artists Routes
const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');

// GET ALL ARTISTS
router.get('/', artists.getData);

// CREATE NEW ARTIST
router.post('/', artists.createDoc);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(artists.getDocById)
.put((req, res) => {
    res.send('Hey, this is the artists.js PUT route');
})
.delete((req, res) => {
    res.send('Hey, this is the artists.js DELETE route');
})

module.exports = router;