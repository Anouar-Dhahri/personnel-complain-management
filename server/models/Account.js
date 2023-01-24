const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    categorie: {type: String, default: "DEMANDE DE NOUVEAU COMPTE"},
    userId: {type: String, required: true},
    region: {type: String, required: true},
    accountType: {type: String, required: true},
    requestedFor: {type: String, required: true},
    urgency: {type: String, required: true},
    requestStatus: {type: String, default: "open"},
    approved: {type: Boolean, default: false},
}, {timestamps:true})

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account