const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
    name:String,
    lastName:String,
    password:String,
    age:String,
    email:{type:String, unique:true},
    isAdmin: { type: Boolean, default: false },
    role:{type: String, default:""},
    place: String,
  });

  const User = mongoose.model('User', userSchema);
  module.exports=User;