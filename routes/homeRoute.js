const express = require('express');
const router = express.Router();
const controller = require('../controllers/home.js');

router.get('/', controller.hello);

module.exports = router;