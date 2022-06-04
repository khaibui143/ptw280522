const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/:slug', siteController.search);
router.get('/', siteController.home);

module.exports = router;
