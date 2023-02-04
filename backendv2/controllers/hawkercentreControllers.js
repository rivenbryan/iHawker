const hawkercentre = require('../models/hawkercentreModel')
const mongoose = require('mongoose')

// Function to get ALL hawker
const gethawkerCentre = async (req, res) => {
    const hawkerCentre = await hawkercentre.find().sort({no_of_stalls: -1})
    res.status(200).json(hawkerCentre)
}

const createhawkerCentre = async (req, res)=>{
    const {id, name_of_centre, location_of_centre, no_of_stalls } = req.body
    try {
        const hawkerCentre  = await hawkercentre.create({id, name_of_centre, location_of_centre, no_of_stalls}) 
        res.status(200).json(hawkerCentre)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    gethawkerCentre,
    createhawkerCentre
}