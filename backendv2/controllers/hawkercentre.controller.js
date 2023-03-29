const HawkercentreModel = require("../models/hawkercentre.model")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model")
const StallModel = require("../models/stall.model")
const mongoose = require("mongoose")

/**
 * Get all Hawker Centres sorted by number of stalls.
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - List of all Hawker Centres sorted by number of stalls in descending order.
 */

const getAllHawkercentre= async (req, res) => {
    const hawkercentres = await HawkercentreModel.find().sort({no_of_stalls: -1})
    res.status(200).json(hawkercentres)
}

/**
 * Get all Stalls for a Hawker Centre by ID.
 * @function
 * @async
 * @param {Object} req - Express request object containing the ID of the Hawker Centre.
 * @param {Object} res - Express response object.
 * @returns {Object} - List of all stalls for the specified Hawker Centre.
 */

const getAllStalls = async (req, res) => {
    const {id} = req.params
    const stalls = await StallModel.find({hawker_centre_belong: mongoose.Types.ObjectId(id)})
    res.status(200).json(stalls)
}

/**
 * Create a new Hawker Centre.
 * @function
 * @async
 * @param {Object} req - Express request object containing the details of the new Hawker Centre.
 * @param {Object} res - Express response object.
 * @returns {Object} - The newly created Hawker Centre.
 */

const createHawkercentre= async (req, res) => {
    const { name_of_centre, location_of_centre, no_of_stalls} = req.body

    const {token} = req.cookies
    //Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, true)
    if (!userType) {
        return res.cookie("token", token).status(401).send("User not authorized")
    }
    //Once verified Hawker
    if (!name_of_centre || !location_of_centre || !no_of_stalls) {
        return res.cookie("token", token).status(404).send("All fields must be filled")
    }
    const hawkercentre = await HawkercentreModel.create({name_of_centre, location_of_centre, no_of_stalls })
    res.cookie("token", token).status(201).json(hawkercentre)
}

/**
 * Get a specific Hawker Centre by ID.
 * @function
 * @async
 * @param {Object} req - Express request object containing the ID of the Hawker Centre.
 * @param {Object} res - Express response object.
 * @returns {Object} - The Hawker Centre with the specified ID.
 */

const getHawkercentreById = async (req, res) => {
    const {id}=req.params
    let hawkercentre
    console.log("id is " + id)
    try {
        hawkercentre = await HawkercentreModel.findById(id)
    } catch (err) {
        return res.status(400).send("Invalid ID not found")
    }
    if(hawkercentre == null) {
        return res.status(404).send("Hawker Centre not found")
    }
    res.status(200).json(hawkercentre)
}

/**
 * Deletes a specific hawker centre by its ID.
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @returns {Object} - The status of the delete operation
 */

const deleteHawkercentreById= async (req, res) => {
    const {id}=req.params
    let hawkercentre
    const {token} = req.cookies
    //Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, true)
    if (!userType) {
        return res.cookie("token", token).status(401).send("User not authorized")
    }
    try {
        hawkercentre = await HawkercentreModel.findById(id)
    }
    catch (err) {
        return res.cookie("token", token).status(400).send("Invlaid ID not found")
    }
    if(hawkercentre == null) {
        return res.cookie("token", token).status(404).send("Hawker Centre not found")
    }
    await HawkercentreModel.deleteOne({_id: id})
    res.cookie("token", token).status(200).send()
}

/**
 * Updates a hawker centre record by ID
 *
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - Returns a JSON object with the updated hawker centre data
 * @throws {Error} - Returns a status 401 if user is not authorized. Returns a status 400 if invalid ID is provided.
 * Returns a status 404 if hawker centre is not found. Returns a status 500 if an error occurs while updating the hawker centre.
 */

const updateHawkercentre = async (req,res) => {
    const {id} = req.params
    const {name_of_centre, location_of_centre, no_of_stalls , img} = req.body
    const {token} = req.cookies

    //Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, true)
    if (!userType) {
        return res.cookie("token", token).status(401).send("User not authorized")
    }
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
    res.cookie("token", token).status(200).send(hawkercentre)
}

/**
 * An object containing functions that handle HTTP requests related to hawker centres.
 * @typedef {Object} HawkercentreController
 * @property {function} getAllHawkercentre - A function that retrieves all hawker centres.
 * @property {function} getAllStalls - A function that retrieves all the stalls by the hawker centre ID.
 * @property {function} createHawkercentre - A function that create hawker centre.
 * @property {function} getHawkercentreById - A function that retrieves the hawker centre by ID
 * @property {function} updateHawkercentre - A function that deletes a single stall by its ID.
 */

const HawkercentreController = {
    getAllHawkercentre,
    getAllStalls,
    createHawkercentre,
    getHawkercentreById,
    deleteHawkercentreById,
    updateHawkercentre
}

module.exports = HawkercentreController