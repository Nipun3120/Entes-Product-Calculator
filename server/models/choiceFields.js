const mongoose = require('mongoose');

const caterogy_1CTsteps_Schema = new mongoose.Schema({
    category: {type: Number, required: true}
})

const caterogy_3CTsteps_Schema = new mongoose.Schema({
    category: {type: Number, required: true}
})

const kvarRatingSchema = new mongoose.Schema({
    rating: {type: String, required: true}
})

const kvarRating = mongoose.model('kvarRating', kvarRatingSchema);
const category3Ct = mongoose.model('category3Ct', caterogy_3CTsteps_Schema)
const category1Ct = mongoose.model('category1Ct', caterogy_1CTsteps_Schema)

module.exports = { kvarRating, category1Ct, category3Ct }