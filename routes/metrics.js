// Metrics Routes
const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metrics');
const validate = require('../middleware/validation')
const { requiresAuth } = require('express-openid-connect');
const validate = require('../middleware/validation');
//const  { metricsValidation }  = require('./helpers/validation.js');

// Auth0

router.get('/', metricsController.getMetrics);
router.post('/', [requiresAuth(), validate.saveMetric], metricsController.newMetric);
router.get('/:id', metricsController.getOne);
router.put('/:id', [requiresAuth(), validate.saveMetric], metricsController.updateMetric);
router.delete('/:id', requiresAuth(), metricsController.deleteMetric);


module.exports = router;
