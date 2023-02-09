// Artistworks Routes
const express = require('express');
const router = express.Router();
const artworks = require('../controllers/artworks');
const validate = require('../middleware/validation')

// Auth0
const { requiresAuth } = require('express-openid-connect');

// GET ALL ARTWORKS
router.get('/', artworks.getDB);

// CREATE NEW ARTWORK
router.post('/', [requiresAuth(), validate.saveArt], artworks.createArtwork);

// GET, PUT, DELETE BY ID ROUTES
router.get('/:id', artworks.getArtwork);

router.put('/:id', [requiresAuth(), validate.saveArt], artworks.updateArtwork);

router.delete('/:id', requiresAuth(), artworks.deleteArtwork);


module.exports = router;