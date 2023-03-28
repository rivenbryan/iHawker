/**
 * This module contains the Mongoose model for Hawker Centre
 * @module models/hawkercentre.model
 */

const mongoose  = require('mongoose')

const Schema = mongoose.Schema

/**
 * @typedef HawkerCentre
 * @property {number} id - The unique ID of the Hawker Centre.
 * @property {string} name_of_centre - The name of the Hawker Centre.
 * @property {string} location_of_centre - The location of the Hawker Centre.
 * @property {number} no_of_stalls - The number of stalls in the Hawker Centre.
 * @property {string} img - The image of the Hawker Centre.
 * @property {number} lat - The latitude coordinate of the Hawker Centre.
 * @property {number} long - The longitude coordinate of the Hawker Centre.
 * @property {string} short_description - The short description of the Hawker Centre.
 * @property {string} long_description - The long description of the Hawker Centre.
 */

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
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    },
    img: {
        type: String
    },
    short_description: {
        type: String
    },
    long_description: {
        type: String
    }
})


HawkercentreModel = mongoose.model('hawkercentre', hawkercentreSchema)
module.exports = HawkercentreModel