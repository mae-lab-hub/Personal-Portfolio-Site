let mongoose = require('mongoose');

//creating a model class
let userModel =mongoose.Schema({

    username: String,
    password: String,
    email: String

},
{
    collection:"user_collection"
});

//return the model
module.exports = mongoose.model('User Collection',userModel);