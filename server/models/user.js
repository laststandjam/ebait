const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database")
const Joi = require('@hapi/joi');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max:255
  },
  email: { type: String, required: true },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    max:1024,
    min:6
  }
});

const User=module.exports = mongoose.model("User", UserSchema)

module.exports.getUserById=function(id, callback){
    User.findById(id,callback)
}
module.exports.getUserById=function(userName, callback){
    const query= {userName:userName}
    User.findById(query,callback)
}
module.exports.addUser = function(newUser, callback)

{
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt), (err,hash)=>{
            newUser.password = hash
            newUser.save(callback)
        }
        
    })
}