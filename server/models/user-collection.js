let mongoose = require('mongoose');
let passportLocalmongoose = require('passport-local-mongoose')
//creating a model class
let userModel =mongoose.Schema({

   username:{

        type: String,
        default: "",
        trim: true,
        required: "username is required"
   }
   ,
   email:{
        type: String,
        default: "",
        trim: true,
        required: "email is required"
   }
},
{
    collection:"user_collection"
});

let options = ({missingPasswordError: "Wrong/ Missing Password"});
userModel.plugin(passportLocalmongoose, options);


//return the model
module.exports.userModels = mongoose.model('User Collection',userModel);