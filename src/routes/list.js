const express = require('express');
const router = express.Router();

const listController = require('../app/controllers/ListController');

router.get('/stored/stores', listController.storedStores);

module.exports = router;
