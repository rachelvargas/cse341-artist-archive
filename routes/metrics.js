// Metrics Routes
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metrics');

//const  { metricsValidation }  = require('./helpers/validation.js');


// GET ALL METRICS
///router.get('/', metricsController.getMetrics);
router.get('/', (metricsController, getMetrics) => {
    res.send('Hey, this is the metrics.js GET route')
})

//router.get('/', metricsController.getMetrics);



// CREATE NEW METRIC
router.post('/', (metricsController, newMetric ) => {
    res.send('Hey, this is the metrics.js POST route');
})

//router.post('/', metricsController.newMetric);


// GET, PUT, DELETE BY ID ROUTES
router.route('/:id')
.get((metricsController, getOne) => {
    res.send('Hey, this is the metrics.js GET ONE BY ID route');
})

//router.get('/:id', metricsController.getOne);


.put((metricsController, updateMetric) => {
    res.send('Hey, this is the metrics.js PUT route');
})

//router.put('/', metricsController.updateMetric);


.delete((metricsController, deleteMetric) => {
    res.send('Hey, this is the metrics.js DELETE route');
});

//router.delete('/:id', metricController.deleteMetric);


module.exports = router;
