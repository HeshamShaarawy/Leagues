var express = require('express')
var router = express.Router();
const matchCtrl = require('../controllers/matches')


router.get('/delete/:matchID', matchCtrl.deleteMatch)
router.get('/', matchCtrl.showAll)
router.get('/edit/:matchID', matchCtrl.editMatch)
router.post('/addMatch', matchCtrl.addMatch)




module.exports = router;

