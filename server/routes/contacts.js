let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the contact model

let Contact = require('../models/contact');

let contactController = require('../controllers/contacts')

//Get route for the contact model
router.get('/', contactController.displayContactList);

//Edit Contact - Update operation

//Get route for displaying the page
router.get('/update/:id', contactController.displayUpdatePage);

//Post for processing the page
router.post('/update/:id', contactController.processUpdatePage);

//Delete contact

//Get route to perform deletion
router.get('/delete/:id', contactController.performDelete);


module.exports = router;