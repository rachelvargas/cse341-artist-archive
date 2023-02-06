const express = require('express');
const router = express.Router();
const home = require('../controllers');

router.get('/', (req, res) => {
    res.send('Hey, this is the index.js route');
});

router.use('/', require('./swagger.js'));
router.use('/artists', require('./artists'));
router.use('/showtimes', require('./showtimes'));
router.use('/artworks', require('./artworks'));
router.use('/metrics', require('./metrics'));
router.use('/', home.displayHome);

module.exports = router;