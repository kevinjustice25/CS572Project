var express = require('express');
const controller = require('../controller/controller');
//const mongoose = require('mongoose');

var router = express.Router();

/* GET users listing. */
router.get('/', controller.getAll);

router.post('/', controller.post);

module.exports = router;
