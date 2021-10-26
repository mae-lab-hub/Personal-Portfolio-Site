let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');

//connect to the contact model

let Contact = require('../models/contact');

//Get route for the contact model
router.get('/',(req,res,next)=>{

    Contact.find((err, contactList)=>{
        if(err){

            return console.error(err);           
        }
        else{
            
            res.render('contact/list',{title:"Contacts", ContactList:contactList}); 
            //res.redirect(' login')    
        }
    });
});



//Edit Contact - Update operation
//Get route for displaying the page
router.get('/update/:id',(req,res,next)=>{

    let id = req.params.id;

    Contact.findById(id,(err, contactToEdit)=>{

        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('contact/update',{title:'Update Contact',  contact:contactToEdit});
        }
    });
})

//Post for processing the page
router.post('/update/:id',(req,res,next)=>{

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
});

//Delete contact
//Get route to perform deletion
router.get('/delete/:id',(req,res,next)=>{

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
});


module.exports = router;