// Artists Routes
const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');

// GET ALL ARTISTS
router.get('/', artists.getData);

// CREATE NEW ARTIST
router.post('/', artists.createArtist);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(artists.getArtistById)
.put(artists.updateArtist)
.delete(artists.removeArtist)

module.exports = router;