/* 
File name      : contact.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 30-10-2021
*/

let mongoose = require('mongoose');


//creating a model class
let contactModel = mongoose.Schema({
    contact_name : String,
    contact_number: String,
    email: String
},
{
    collection:"contacts"
});

//return the model
module.exports = mongoose.model('Contact',contactModel);