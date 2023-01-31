// Metrics Routes
const express = require('express');
const router = express.Router();
const metrics = require('../controllers/metrics');

router.get('/', (req, res) => {
    res.send('Hey, this is the metrics.js route');
});

module.exports = router;