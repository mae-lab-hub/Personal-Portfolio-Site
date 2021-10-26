let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the user collections model

let User = require('../models/user-collection');

//Get route for the user collection
router.get('/',(req,res,next)=>{

    User.find((err, userList)=>{
        if(err){

            return console.error(err);          
        }
        else{
            console.log(userList);
            res.render('partials/login', {title:"Login", UserList: userList});
        }
    });
});

module.exports = router;