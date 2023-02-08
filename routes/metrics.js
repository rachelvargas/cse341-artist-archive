// Metrics Routes
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metrics');

//const  { metricsValidation }  = require('./helpers/validation.js');

router.get('/', metricsController.getMetrics);
router.post('/', metricsController.newMetric);
router.get('/:id', metricsController.getOne);
router.put('/', metricsController.updateMetric);
router.delete('/:id', metricsController.deleteMetric);


// GET ALL METRICS
///router.get('/', metricsController.getMetrics);
router.get('/', (metricsController, getMetrics) => {
    getMetrics.send('Hey, this is the metrics.js GET route')
})

// CREATE NEW METRIC
router.post('/', (metricsController, newMetric ) => {
    newMetric.send('Hey, this is the metrics.js POST route');
})

// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get((metricsController, getOne) => {
    getOne.send('Hey, this is the metrics.js GET ONE BY ID route');
})

.put((metricsController, updateMetric) => {
    updateMetric.send('Hey, this is the metrics.js PUT route');
})

.delete((metricsController, deleteMetric) => {
    deleteMetric.send('Hey, this is the metrics.js DELETE route');
})


module.exports = router;
