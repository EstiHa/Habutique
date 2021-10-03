var express = require('express');
var router = express.Router();
var tipsController = require('../controller/tipsController');

router.get('/', tipsController.getTips);

module.exports = router;
