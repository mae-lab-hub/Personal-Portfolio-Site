let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the contact model

let Contact = require('../models/contact');

//Get route for the contact model
router.get('/',(req,res,next)=>{

    Contact.find((err, ContactList)=>{
        if(err){

            return console.error(err);           
        }
        else{
            console.log(ContactList);
        }
    });
});

module.exports = router;