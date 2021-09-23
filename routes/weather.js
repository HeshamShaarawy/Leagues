var express = require('express');
var router = express.Router();
var weatherCtrl = require('../controllers/weather')


router.get('/', weatherCtrl.showWeather)


module.exports = router;