var express = require('express');
var router = express.Router();
var lipsController = require('../controller/lipsController');

router.get('/', lipsController.getLips);

module.exports = router;