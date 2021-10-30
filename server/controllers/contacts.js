/* 
File name      : contact.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 30-10-2021
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to db schema

let Contact = require('../models/contact');

module.exports.displayContactList = (req,res,next)=>{

    Contact.find((err, contactList)=>{
        if(err){

            return console.error(err);           
        }
        else{
            
            res.render('auth/list',
            {title:"Contacts", 
            ContactList:contactList,
            displayName: req.user ? req.user.displayName : ''});              
        }
    });
};

module.exports.displayUpdatePage = (req,res,next)=>{

    let id = req.params.id;

    Contact.findById(id,(err, contactToEdit)=>{

        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('auth/update',
            {title:'Update Contact',
            contact:contactToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.processUpdatePage = (req,res,next)=>{

    let id = req.params.id;

    let updateContact = Contact({
        "_id": id,
        "contact_name": req.body.contact_name,
        "contact_number": req.body.contact_number,
        "email": req.body.email
    });

    Contact.updateOne({_id:id}, updateContact,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh contact list
            res.redirect('/contact-list');
        }
    });   
};

module.exports.performDelete = (req,res,next)=>{

    let id = req.params.id;

    Contact.remove({_id:id},(err)=>{

        if(err){
            console.log(err);
            res.end(err);
        }
        else{

            //refresh contact list
            res.redirect('/contact-list');
        }

    });
};