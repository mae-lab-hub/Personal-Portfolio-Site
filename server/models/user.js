let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

//creating a model class
let User =mongoose.Schema({

   username:{

     type: String,
     default: "",
     trim: true,
     required: "username is required"
   }
   ,
  /* password:{
      type: String,
      default: '',
      trim: true,
      required: 'password is required'

   },*/
   email:{

     type: String,
     default: "",
     trim: true,
     required: "email is required"
   },
   displayName:{

     type: String,
     default: "",
     trim: true,
     required: "Display name is required"
   },
   created:{

     type: Date,
     default: Date.now
   },
   updated:{

     type: Date,
     default: Date.now
   }

},
{
    collection:"user_collection"
});

let options = ({missingPasswordError: "Wrong / Missing Password"});
User.plugin(passportLocalMongoose, options);

//return the model
module.exports.User = mongoose.model('User', User);