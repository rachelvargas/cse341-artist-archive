// Showtimes Routes
const express = require('express');
const router = express.Router();
const showtimes = require('../controllers/showtimes');
const validate = require('../middleware/validation')

// Auth0
const { requiresAuth } = require('express-openid-connect');

// GET ALL ARTWORKS
router.get('/', showtimes.getDB);

// CREATE NEW ARTWORK
router.post('/', [requiresAuth(), validate.saveShowtime], showtimes.createShowtime);

// GET, PUT, DELETE BY ID ROUTES
router.get('/:id', showtimes.getShowtime);

router.put('/:id', [requiresAuth(), validate.saveShowtime], showtimes.updateShowtime);

router.delete('/:id', requiresAuth(), showtimes.deleteShowtime);

module.exports = router;