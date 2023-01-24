const mongoose = require('mongoose');

const UpdateAccountSchema = new mongoose.Schema({
    categorie: {type: String, default: "MODIFICATION DE COMPTE"},
    userId: {type: String, required: true},
    region: {type: String, required: true},
    accountType: {type: String, required: true},
    requestedFor: {type: String, required: true},
    urgency: {type: String, required: true},
    requestStatus: {type: String, default: "open"},
    approved: {type: Boolean, default: false},
}, {timestamps:true})

const UpdateAccount = mongoose.model('UpdateAccount', UpdateAccountSchema);

module.exports = UpdateAccount