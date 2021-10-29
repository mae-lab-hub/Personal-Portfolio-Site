let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the user collections model

let User = require('../models/user-collection');

let loginController = require('../controllers/login')


//Get route for the user collection
router.get('/', loginController.displayLoginPage);

router.post('/login/Mae', loginController.processLogin)


module.exports = router;