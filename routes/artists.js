// Artists Routes
const express = require('express');
const router = express.Router();
const artists = require('../controllers/artists');
const validate = require('../middleware/validation')

// Auth0
const { requiresAuth } = require('express-openid-connect');

// GET ALL ARTISTS
router.get('/', artists.getData);

// CREATE NEW ARTIST

router.post('/', [requiresAuth(), validate.saveArtist], artists.createArtist);

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get(artists.getArtistById)
.put([requiresAuth(), validate.saveArtist], artists.updateArtist)
.delete(requiresAuth(), artists.removeArtist)

module.exports = router;