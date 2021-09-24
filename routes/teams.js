var express= require('express')
var router = express.Router();
const teamsCtrl = require('../controllers/teams');
const passport = require('passport');



router.post('/:id/players', teamsCtrl.addPlayer)
router.delete('/deleteplayer/:teamId/:playerId', teamsCtrl.deletePlayer)

router.get('/', teamsCtrl.showAll);
router.get('/new', teamsCtrl.new);
router.post('/:id',teamsCtrl.update);
router.post('/', teamsCtrl.create);


router.delete('/delete/:id', teamsCtrl.delete);
router.get('/edit/:id', teamsCtrl.edit);
router.get('/:id', teamsCtrl.show);








module.exports = router;
