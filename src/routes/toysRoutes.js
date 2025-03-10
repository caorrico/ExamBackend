const express = require('express');
const router = express.Router();
const toysService = require('../services/toysService');

router.get('/', toysService.getToysCost);



module.exports = router;
