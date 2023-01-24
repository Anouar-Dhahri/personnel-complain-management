const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    categorie: {type: String, default: "PROBLÈME APPLICATION"},
    userId: {type: String, required: true},
    title:{type: String, required: true},
    description: {type: String, required: true},
    src24: {type: String, required: true},
    src25: {type: String, required: true},
    src26: {type: String, required: true},
    contact: {type: String, required: true},
    urgency: {type: String, required: true},
    requestedFor: {type: String, required: true},
    reference:{type: String, required:true},
    attachement:{
      name: {
        type: String,
        default: null,
      },
      path: {
        type: String,
        default: null,
      },
      type: {
        type: String,
        default: null,
      },
      size: {
        type: String,
        default: null,
      }
    },
    requestStatus: {type: String, default: "open"},
    approved: {type: Boolean, default: false},
}, {timestamps:true})

const Application = mongoose.model('Application', ApplicationSchema);

module.exports = Application