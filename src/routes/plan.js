const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const planController = require('../app/controllers/PlanController');

router.get('/stored/plans', planController.storedPlans);

module.exports = router;
