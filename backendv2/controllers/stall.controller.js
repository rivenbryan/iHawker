const jwt = require("jsonwebtoken")
const StallModel = require("../models/stall.model")
const UserModel = require("../models/user.model")

const getAllStalls= async (req, res) => {
    const stalls = await StallModel.find().sort({no_of_stalls: -1})
    res.status(200).json(stalls)
}

const createStall= async (req, res) => {
    const { stall_name, description, menu_item, topseller, hawker_centre_belong} = req.body
    //Check for Hawker Privilege
    // if (!UserModel.checkUserType(token, true)) {
    //     return res.status(401).send("User not authorized")
    // }
    //Once verified
    if (!stall_name || !description || !menu_item || !topseller) {
        return res.status(404).send("All fields must be filled")
    }
    const stall = await StallModel.create({stall_name, description, menu_item, topseller, hawker_centre_belong})
    res.status(201).json(stall)
}

const getStallById = async (req, res) => {
    const {id}=req.params
    let stall
    console.log("id is " + id)
    try {
        stall = await StallModel.findById(id)
    } catch (err) {
        res.status(400).send("Invalid ID not found")
        return
    }
    if(stall == null) {
        res.status(404).send("Stall not found")
        return
    }
    res.status(200).json(stall)
}

const deleteStallById= async (req, res) => {
    const {id}=req.params
    // const {token} = req.body
    let stall
    //Check for Hawker Privilege
    // if (!UserModel.checkUserType(token, true)) {
    //     return res.status(401).send("User not authorized")
    // }
    try {
        stall = await StallModel.findById(id)
    }
    catch (err) {
        res.status(400).send("Invlaid ID not found")
        return
    }
    if(stall == null) {
        res.status(404).send("Stall not found")
        return
    }
    await StallModel.deleteOne({_id: id})
    res.status(200).send()
}

const updateStallById = async (req,res) => {
    const {id} = req.params
    const {name_of_centre, location_of_centre, no_of_stalls , img} = req.body

    // //Check for Hawker Privilege
    // if (!UserModel.checkUserType(token, true)) {
    //     return res.status(401).send("User not authorized")
    // }
    const stall = await StallModel.findById(id)
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
    await stall.save()
    res.status(200).send(stall)
}

const addReview = async (req, res) => {

    const {id} = req.params
    const {name,food,date_of_review,date_of_visit,rating,comment} = req.body
    // const {food, date_of_visit, rating , date_of_review, comment, token} = req.body
    // date_of_review = Date.now()
    //Check for User Privilege
    // if (!UserModel.checkUserType(token, false)) {
    //     return res.status(401).send("User not authorized")
    // }
    // //Retrieve username from token
    // const user = await UserModel.getUser(token)
    // const name = user.name

    //Retrieve stall & reviewList from id
    const stall = await StallModel.findById(id)

    let review = {
        name,
        food,
        date_of_review,
        date_of_visit,
        rating,
        comment
    }
    stall.reviews.push(review)
    await stall.save()
    StallModel.computeAvgRating(stall._id)
    const updatedStall = await StallModel.findById(id)
    res.status(201).send(updatedStall)
}

const StallController = {
    getAllStalls,
    createStall,
    getStallById,
    deleteStallById,
    updateStallById,
    addReview
}

module.exports = StallController