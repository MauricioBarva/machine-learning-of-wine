'use strict';

var express = require('express');
var wineController = require('../controllers/wine');
var router = express.Router();

router.get('/', wineController.home);
router.post('/save-data', wineController.saveData);
router.post('/create-data', wineController.createData);
router.get('/get-data', wineController.getData);

module.exports = router;