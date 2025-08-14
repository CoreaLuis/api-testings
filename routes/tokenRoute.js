const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const controllerToken = require('../controllers/tokenController');
require('dotenv').config();

router.post('/', controllerToken.token);

module.exports = router;