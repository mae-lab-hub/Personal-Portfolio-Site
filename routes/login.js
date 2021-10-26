let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the user collections model

let User = require('../models/user-collection');

//Get route for the user collection
router.get('/',(req,res,next)=>{

    User.find((err, UserList)=>{
        if(err){

            return console.error(err);          
        }
        else{
            console.log(UserList);
        }
    });
});

module.exports = router;