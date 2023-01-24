const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom:{required:true, type:String},
    prenom:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    role:{required:true, type:String},
}, {timestamps:true})

const User = mongoose.model('User', UserSchema);

module.exports = User