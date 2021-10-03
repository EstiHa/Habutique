var express = require('express');
var router = express.Router();
var orderController = require('../controller/orderController');


router.post('/', orderController.postOrder);

router.post('/email', orderController.email);


module.exports = router;