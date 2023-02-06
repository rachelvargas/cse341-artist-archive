// Artists Routes
const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');

// Auth0
const { requiresAuth } = require('express-openid-connect');

// GET ALL ARTISTS
router.get('/', artists.getData);

// CREATE NEW ARTIST
router.post('/', requiresAuth(), artists.createArtist);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(artists.getArtistById)
.put(requiresAuth(), artists.updateArtist)
.delete(requiresAuth(), artists.removeArtist)

module.exports = router;