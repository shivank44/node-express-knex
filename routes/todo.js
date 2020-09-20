const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const todoController = require('../controllers/TodoController');

//getAll API
router.get('/',todoController.getAll);

//getOne Api
router.get('/:id',checkAuth,todoController.getOne);


//Create Api
router.post('/',checkAuth,todoController.create);


//Update Api
router.put('/:id',checkAuth,todoController.update);

//Delete Api
router.delete('/:id',checkAuth,todoController.delete);


module.exports = router;