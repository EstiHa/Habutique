var express = require('express');
var router = express.Router();
var faceController = require('../controller/faceController');

router.get('/', faceController.getFace);

module.exports = router;
