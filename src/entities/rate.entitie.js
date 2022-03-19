const mongoose = require('mongoose')

const rateSchema = new mongoose.Schema({
    idMovie: mongoose.SchemaTypes.Number,
    classification: mongoose.SchemaTypes.Number,
    createdAt: mongoose.SchemaTypes.Date,
    idUser: mongoose.SchemaTypes.Number,
    description: mongoose.SchemaTypes.String
})


module.exports = mongoose.model('rate', rateSchema)
