// Metrics Routes
const express = require('express');
const router = express.Router();
const metrics = require('../controllers/metrics');

// GET ALL METRICS
router.get('/', (req, res) => {
    res.send('Hey, this is the metrics.js GET route');
});

// CREATE NEW METRIC
router.post('/', (req, res) => {
    res.send('Hey, this is the metrics.js POST route');
});

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get((req, res) => {
    res.send('Hey, this is the metrics.js GET BY ID route');
})
.put((req, res) => {
    res.send('Hey, this is the metrics.js PUT route');
})
.delete((req, res) => {
    res.send('Hey, this is the metrics.js DELETE route');
})

module.exports = router;