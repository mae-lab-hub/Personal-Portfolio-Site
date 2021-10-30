/* 
File name      : contacts.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 30-10-2021
*/

let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contacts')

//helper function for gaurd purposes
function requireAuth(req,res,next){

    //if the user is authenticated
    if(!req.isAuthenticated()){

        return res.redirect('/login');
    }
    next();
}


//Get route for the contact model
router.get('/', requireAuth, contactController.displayContactList);

//Edit Contact - Update operation

//Get route for displaying the page
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

//Post for processing the page
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

//Delete contact

//Get route to perform deletion
router.get('/delete/:id', requireAuth, contactController.performDelete);


module.exports = router;