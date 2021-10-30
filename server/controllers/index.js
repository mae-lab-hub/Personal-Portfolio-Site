let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomepage = (req,res,next)=>{

    res.render('index',{title:"Home", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayAboutPage = (req,res,next)=>{

    res.render('index',{title:"About", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayProjectsPage = (req,res,next)=>{

    res.render('index', { title: "Projects", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayServicesPage = (req,res,next)=>{

    res.render('index', { title:"Services", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayContactPage = (req,res,next)=>{

    res.render('index',{title:"Contact Us", displayName: req.user ? req.user.displayName : ''});
}

module.exports.displayLoginPage = (req,res,next)=>{

    console.log(User);
    User.find((err, userList)=>{
        if(err){

            return console.error(err);          
        }
        else{
            console.log(userList);
           
        }
    });



    //check if user is already logged in
    if(!req.user){
        res.render('auth/login',{
            title:"Login",
            message: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : '' 
             })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next)=>{

    passport.authenticate('local',
    (err, user, info)=>{

        //if there is a server error
        if(err){
            return next(err);
        }
        //if there is a user error
        if(!user){
            req.flash('loginMessage', 'Authentication Error');

            return res.redirect('/login');
        }

        req.login(user,(err)=>{
            if(err){
                return next(err);

            }
            return res.redirect('/contact-list')
        });


    })(req,res,next);


}


module.exports.displayRegisterPage = (req,res,next)=>{


    //check if user is logged in
    if(!req.user){

        res.render('auth/register',{
            title:"Register",
            message: req.flash('registerMesage'),
            displayName: req.user ? req.user.displayName :''
        });
    }
    else{

        return res.redirect('/');
    }


    
}

module.exports.processRegisterPage = (req,res,next) => {

    //instantiate user object
    let newUser = new User({
        username: req.body.username,
        email :req.body.email,
        displayName : req.body.displayName
    });

    User.register(newUser, req.body.password,(err)=>{
        if(err){

            console.log("Error: Inserting New User.")
            if(err.name =="UserExistsError"){

                req.flash('registerMessage','Registration Error: User Already Exists.');
                console.log("Error: User Already Exists.")

            }
            return res.render('auth/register', {
                title:"Register",
                message: req.flash('registerMesage'),
                displayName: req.user ? req.user.displayName :''

            });
        }
        else{
            //if no error, the reg is successful
            //register the user and authenticate them
            return passport.authenticate('local')(req,res,()=>{
                res.redirect('/contact-list');
            });
        }
    })
}




module.exports.performLogout = (req,res,next)=>{

    req.logout();
    res.redirect('/');

}
