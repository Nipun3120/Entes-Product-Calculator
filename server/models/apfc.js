const mongoose = require("mongoose");

const apfcSchemma = new mongoose.Schema({
    type: {type: String, required: true},
    model: {type: String, required: true},
    noOfSteps: {type: Number, required: true},
    price: {type: Number, required: true},
    discount: {type: Number, required: true}
})

module.exports = mongoose.model('apfcModel', apfcSchemma)