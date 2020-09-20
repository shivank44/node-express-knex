const express = require('express');

const router = express.Router();

const userController = require('../controllers/UserController');

//SignUp API
router.post('/signup',userController.signup);

//LoginApi
router.post('/login',userController.login);


module.exports = router;