var express = require('express');
const controller = require('../controller/controller');
//const mongoose = require('mongoose');

var router = express.Router();

/* GET users listing. */
router.get('/', controller.getAll);

router.post('/', controller.post);
router.get('/:id', controller.getById)
router.put('/:id', controller.updateById)

module.exports = router;
