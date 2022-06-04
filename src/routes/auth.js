const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../app/models/User')
const authController = require('../app/controllers/AuthController');

router.get('/login', authController.login);
router.get('/register', authController.register);
router.post('/regis', authController.regis)
router.post('/logy', authController.logy)


module.exports = router;