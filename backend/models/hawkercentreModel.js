const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const hawkercentreSchema = new Schema({
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

const HawkerModel = mongoose.model('hawkercentre', hawkercentreSchema)
module.exports = HawkerModel