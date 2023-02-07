// Showtimes Routes
const express = require('express');
const router = express.Router();
const showtimes = require('../controllers/showtimes');
const validate = require('../middleware/validation')

// GET ALL ARTWORKS
router.get('/', showtimes.getDB);

// CREATE NEW ARTWORK
router.post('/', validate.saveShowtime, showtimes.createShowtime);

// GET, PUT, DELETE BY ID ROUTES
router.get('/:id', showtimes.getShowtime);

router.put('/:id', validate.saveShowtime, showtimes.updateShowtime);

router.delete('/:id', showtimes.deleteShowtime);

module.exports = router;