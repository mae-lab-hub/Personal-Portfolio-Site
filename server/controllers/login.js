let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');


let User = require('../models/user-collection');


module.exports.displayLoginPage = (req,res,next)=>{

    User.find((err, userList)=>{
        if(err){

            return console.error(err);          
        }
        else{
            //console.log(userList);
            res.render('auth/login', {title:"Login", UserList: userList});
           
            
        }
    });


   
};


//process login

module.exports.processLogin = (req,res,next)=>{

   
   // userName = document.getElementById("user-name").value;
    let userName = req.params.id;
    let password = req.params.password;
    //password = document.getElementById("password").value;

    //alert(password);

    User.findOne({'username': 'Mae',"password":"1234"}, function(error, exist) {

        if(exist && !error){
           // alert("yay");
           res.redirect('/contact-list');
            // Window.alert("Yay")
        } else {
            
            res.end(err);
            return;
        }
        })
    
    



};


