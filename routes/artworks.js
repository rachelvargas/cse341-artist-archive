// Artistworks Routes
const express = require('express');
const router = express.Router();
const artworks = require('../controllers/artworks');
const validate = require('../middleware/validation')

// GET ALL ARTWORKS
router.get('/', artworks.getDB);

// CREATE NEW ARTWORK
router.post('/', validate.saveArt, artworks.createArtwork);

// GET, PUT, DELETE BY ID ROUTES
router.get('/:id', artworks.getArtwork);

router.put('/:id', validate.saveArt, artworks.updateArtwork);

router.delete('/:id', artworks.deleteArtwork);


module.exports = router;