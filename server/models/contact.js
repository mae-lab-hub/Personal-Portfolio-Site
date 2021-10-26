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