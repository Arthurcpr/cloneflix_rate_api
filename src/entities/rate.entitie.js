const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const rateSchema = new mongoose.Schema({
    id: {type: mongoose.SchemaTypes.String, default: nanoid()},
    idMovie: mongoose.SchemaTypes.Number,
    classification: mongoose.SchemaTypes.Number,
    createdAt: mongoose.SchemaTypes.Date,
    idUser: mongoose.SchemaTypes.Number,
    description: mongoose.SchemaTypes.String
})


module.exports = mongoose.model('rate', rateSchema)
