var express = require('express');
var router = express.Router();

var controller = require('../controllers/users');

/* POST to Add User Service */
router.post('/create', controller.create);

/* GET users listing. */
router.get('/', controller.getAll);

router.get('/:id', controller.get);

// update
router.put('/:id', controller.update);
router.patch('/:id', controller.update);

// delete
router.delete('/:id', controller.delete);


module.exports = router;
