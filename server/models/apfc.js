const mongoose = require("mongoose");

const apfcSchemma = new mongoose.Schema({
    type: String,
    model: String,
    noOfSteps: Number,
    price: Number,
    discount: Number
})

module.exports = mongoose.model('apfcModel', apfcSchemma)