var express = require('express')
var router = express.Router();
const courtCtrl = require('../controllers/courts')

router.get('/', courtCtrl.showAll) 
router.get('/new', courtCtrl.new)
router.post('/', courtCtrl.create)
router.delete('/delete/:id', courtCtrl.delete);
router.get('/edit/:id', courtCtrl.edit);
router.put('/:id', courtCtrl.update)




module.exports = router