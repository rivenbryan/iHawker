const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const hawkercentreSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name_of_centre: {
        type: String,
        required: true
    },
    location_of_centre: {
        type: String,
        required: true
    },
    no_of_stalls: {
        type: Number,
        required: true
    },
    img: {
        type: String,
    }
})

module.exports = mongoose.model('hawkercentre', hawkercentreSchema)