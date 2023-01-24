const mongoose = require('mongoose');

const SoftwareSchema = new mongoose.Schema({
    categorie: {type: String, default: "DEMANDE DE NOUVEAU SOFTWARE"},
    userId: {type: String, required: true},
    region: {type: String, required: true},
    softwareName: {type: String, required: true},
    requestedFor: {type: String, required: true},
    machineName:{type: String, required: true},
    urgency: {type: String, required: true},
    requestStatus: {type: String, default: "open"},
    approved: {type: Boolean, default: false},
}, {timestamps:true})

const Software = mongoose.model('Software', SoftwareSchema);

module.exports = Software
