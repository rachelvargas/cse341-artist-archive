// Metrics Routes
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metrics');

//const  { metricsValidation }  = require('./helpers/validation.js');

// Auth0
const { requiresAuth } = require('express-openid-connect');

router.get('/', metricsController.getMetrics);
router.post('/', requiresAuth(), metricsController.newMetric);
router.get('/:id', metricsController.getOne);
router.put('/:id', requiresAuth(), metricsController.updateMetric);
router.delete('/:id', requiresAuth(), metricsController.deleteMetric);


module.exports = router;
