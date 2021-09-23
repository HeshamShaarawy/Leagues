var express = require('express')
var router = express.Router();
var apiCtrl = require('../controllers/api'); 
const passport = require('passport');

router.get('/',apiCtrl.apiDocs)
router.get('/matches', apiCtrl.allMatches);

module.exports = router