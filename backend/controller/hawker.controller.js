const mongoose = require("mongoose")
const HawkerModel = require("../models/hawkercentreModel")

const getAllHawker= async (req, res) => {
    const hawkers = await HawkerModel.find()
    res.status(200).json(hawkers)
}

const createHawker= async (req, res) => {
    const hawker = await HawkerModel.create(req.body)
    res.status(201).send(hawker)
}

const getHawkerById= async (req, res) => {
    const {id}=req.params
    let hawker
    try {
        hawker = await HawkerModel.findOne({_id: id})
    } catch (err) {
        res.status(400).send("Invlaid ID not found")
        return
    }
    if(hawker == null) {
        res.status(404).send("Hawker not found")
        return
    }
    res.status(200).json(hawker)
}

const deleteHawkerById= async (req, res) => {
    const {id}=req.params
    let hawker
    try {
        hawker = await HawkerModel.findOne({_id: id})
    }
    catch (err) {
        res.status(400).send("Invlaid ID not found")
        return
    }
    if(hawker == null) {
        res.status(404).send("Hawker not found")
        return
    }
    await HawkerModel.deleteOne({_id: id})
    res.status(200).send()
}



const HawkerController={
    getAllHawker,
    createHawker,
    getHawkerById,
    deleteHawkerById
}

module.exports = HawkerController