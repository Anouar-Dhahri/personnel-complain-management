const mongoose = require('mongoose');

const HardwareSchema = new mongoose.Schema({
    categorie: {type: String, default: "DEMANDE D'ÉQUIPEMENT"},
    userId: {type: String, required: true},
    region: {type: String, required: true},
    hardwareName: {type: String, required: true},
    requestedFor: {type: String, required: true},
    aquisition_transfert_budget:{type: Boolean, default:false},
    natureBesoin:{type: String, required: true},
    urgency: {type: String, required: true},
    requestStatus: {type: String, default: "open"},
    approved: {type: Boolean, default: false},
}, {timestamps:true})

const Hardware = mongoose.model('Hardware', HardwareSchema);

module.exports = Hardware
