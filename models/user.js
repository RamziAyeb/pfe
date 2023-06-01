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
    image: {
      type: String,
      default: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",},    
      galerie: {
        type: [String],
        default: [
          "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        ],
      },
              
  });
  
    

  const User = mongoose.model('User', userSchema);
  module.exports=User;