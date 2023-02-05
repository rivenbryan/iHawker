const HawkercentreModel = require("../models/hawkercentreModel")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model")

const getAllHawkercentre= async (req, res) => {
    const hawkercentres = await HawkercentreModel.find().sort({no_of_stalls: -1})
    res.status(200).json(hawkercentres)
}

const createHawkercentre= async (req, res) => {

    const { name_of_centre, location_of_centre, no_of_stalls, token } = req.body

    //JWT verification
    const {id} = jwt.verify(token, process.env.SECRET)
    if (!UserModel.checkHawker(id)) {
        return res.status(401).send("User not authorized")
    }
    //Once verified
    if (!name_of_centre || !location_of_centre || !no_of_stalls) {
        return res.status(404).send("All fields must be filled")
    }
    const hawkercentre = await HawkercentreModel.create({name_of_centre, location_of_centre, no_of_stalls })
    res.status(201).json(hawkercentre)
}

const getHawkercentreById = async (req, res) => {
    const {id}=req.params
    let hawkercentre
    console.log("id is " + id)
    try {
        hawkercentre = await HawkercentreModel.findById(id)
    } catch (err) {
        res.status(400).send("Invalid ID not found")
        return
    }
    if(hawkercentre == null) {
        res.status(404).send("Hawker Centre not found")
        return
    }
    res.status(200).json(hawkercentre)
}

const deleteHawkercentreById= async (req, res) => {
    const {id}=req.params
    let hawkercentre
    try {
        hawkercentre = await HawkercentreModel.findById(id)
    }
    catch (err) {
        res.status(400).send("Invlaid ID not found")
        return
    }
    if(hawkercentre == null) {
        res.status(404).send("Hawker Centre not found")
        return
    }
    await HawkercentreModel.deleteOne({_id: id})
    res.status(200).send()
}

const updateHawkercentre = async (req,res) => {
    const {id} = req.params
    const {name_of_centre, location_of_centre, no_of_stalls , img} = req.body

    const hawkercentre = await HawkercentreModel.findById(id)
    if (name_of_centre != undefined) {
        hawkercentre.name_of_centre = name_of_centre
    }
    if (no_of_stalls != undefined) {
        hawkercentre.no_of_stalls = no_of_stalls
    }
    if (location_of_centre != undefined) {
        hawkercentre.location_of_centre = location_of_centre
    }
    if (img != undefined) {
        hawkercentre.img = img
    }
    await hawkercentre.save()
    res.status(200).send(hawkercentre)
}

const HawkercentreController = {
    getAllHawkercentre,
    createHawkercentre,
    getHawkercentreById,
    deleteHawkercentreById,
    updateHawkercentre
}

module.exports = HawkercentreController