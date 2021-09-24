var express = require('express')
var router = express.Router();
const matchCtrl = require('../controllers/matches')
const passport = require('passport');

router.delete('/delete/:matchID', matchCtrl.deleteMatch)
router.get('/', matchCtrl.showAll)
router.get('/edit/:matchID', matchCtrl.editMatch)
router.post('/addMatch', matchCtrl.addMatch)
router.put('/:id', matchCtrl.updateMatch)



module.exports = router;

