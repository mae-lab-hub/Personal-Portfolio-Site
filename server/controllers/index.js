let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomepage = (req,res,next)=>{

    res.render('index',{title:"Home"});
}

module.exports.displayAboutPage = (req,res,next)=>{

    res.render('index',{title:"About"});
}

module.exports.displayProjectsPage = (req,res,next)=>{

    res.render('index', { title: "Projects"});
}

module.exports.displayServicesPage = (req,res,next)=>{

    res.render('index', { title:"Services"});
}

module.exports.displayContactPage = (req,res,next)=>{

    res.render('index',{title:"Contact"});
}

module.exports.displayLoginPage = (req,res,next)=>{

    //check if user is already logged in
    if(!req.user){
        res.render('auth/login',{
            title:"login",
            message: req.flash('loginMessage'),
            displayName : req.user ? req.user.displayName:''
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

module.exports.performLogout = (req,res,next)=>{

    req.logout();
    res.redirect('/');

}
