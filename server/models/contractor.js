const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
    rating: String,
    model: String,
    price: Number,
    discount: Number
})


module.exports = mongoose.model('contModel', contractorSchema)