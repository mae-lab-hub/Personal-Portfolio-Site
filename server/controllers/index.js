let express = require('express');
let router = express.Router();

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

    if(!req.user){
        res.render('auth/login',{
            title:"login",
            message: req.flash('loginMessage')
            
        })
    }
}

module.exports.processLoginPage = (req,res,next)=>{

    res.render('index',{title:"Contact"});
}
