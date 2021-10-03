var express = require('express');
var router = express.Router();
var eyesController = require('../controller/eyesController');

router.get('/', eyesController.getEyes);

module.exports = router;