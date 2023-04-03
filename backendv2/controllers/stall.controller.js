const jwt = require("jsonwebtoken")
const StallModel = require("../models/stall.model")
const UserModel = require("../models/user.model")
const cloudinary = require('../utils/cloudinary')

/**
 * Get all stalls sorted by number of stalls
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<Array<Stall>>} Array of stall objects
 */

const getAllStalls= async (req, res) => {
    const stalls = await StallModel.find().sort({no_of_stalls: -1})
    res.status(200).json(stalls)
}

/**
 * Create a new stall
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @param {string} req.body.name - The name of the new stall
 * @param {string} req.body.description - The description of the new stall
 * @param {string} req.body.image - The URL of the image for the new stall
 * @returns {Promise<Object>} The created stall object
 */

const createStall= async (req, res) => {
    const { stall_name, description, menu_item, topseller, hawker_centre_belong, stall_belong, image} = req.body
    console.log(stall_belong)
    // Upload StoreFront photo
    const result = await cloudinary.uploader.upload(image, {
        folder: "hawkerStores",
        // width: 500,
        // crop: "scale"
    })
    // Upload TopSeller Photo for each topseller
    // Overwrite topseller.tsImg with the URL of uploaded image
    async function getTsImgURL() {
        for (const element of topseller){
            const tsResult = await cloudinary.uploader.upload(element.tsImg, {
                folder: "topSellers",
                // width: 500,
                // crop: "scale"
            })
            element.tsImg = tsResult.secure_url;
        }
    }

    await getTsImgURL();

    //Once verified
    if (!stall_name || !description || !menu_item || !topseller) {
        return res.status(404).send("All fields must be filled")
    }
    console.log(stall_belong)
    const avg_rating = 0
    const stall = await StallModel.create({
        stall_name,
        description,
        menu_item,
        topseller,
        hawker_centre_belong,
        avg_rating,
        stall_belong,
        avg_rating,
        image: {
            public_id: result.public_id,
            url: result.secure_url
        }})
    res.status(201).json(stall).send()
}

/**
 * Get a stall by its ID
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @param {string} req.params.id - The ID of the stall to retrieve
 * @returns {Promise<Object>} The requested stall object
 */

const getStallById = async (req, res) => {
    const {id}=req.params
    let stall
    console.log("id is " + id)
    try {
        stall = await StallModel.findById(id)
    } catch (err) {
        return res.status(400).send("Invalid ID not found")
    }
    if(stall == null) {
        return res.status(404).send("Stall not found")
    }
    res.status(200).json(stall)
}

/**
 * Delete a stall by its ID
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @param {string} req.params.id - The ID of the stall to delete
 * @returns {Promise<Object>} The deleted stall object
 */

const deleteStallById= async (req, res) => {
    const {id}=req.params
    const {token} = req.cookies
    let stall
    // Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, true)
    if (!userType) {
        return res.cookie("token", token).status(401).send("User not authorized")
    }
    try {
        stall = await StallModel.findById(id)
    }
    catch (err) {
        return res.cookie("token", token).status(400).send("Invlaid ID not found")
    }
    if(stall == null) {
        return res.cookie("token", token).status(404).send("Stall not found")
    }
    await StallModel.deleteOne({_id: id})
    res.cookie("token", token).status(200).send()
}

/**
 * Update a stall by its ID
 * @param {Object} req - The HTTP request object
 * @param {Object} res - The HTTP response object
 * @param {string} req.params.id - The ID of the stall to update
 * @param {string} [req.body.name] - The updated name of the stall
 * @param {string} [req.body.description] - The updated description of the stall
 * @param {string} [req.body.image] - The updated URL of the image for the stall
 * @returns {Promise<Object>} The updated stall object
 */

const updateStallById = async (req,res) => {
    const {id} = req.params
    const {name_of_centre, location_of_centre, no_of_stalls , img} = req.body
    const {token} = req.cookies

    //Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, true)
    if (!userType) {
        return res.cookie("token", token).status(401).send("User not authorized")
    }

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
    res.cookie("token", token).status(200).send(stall)
}

/**
 * Adds a new review for a specific stall
 * @async
 * @function addReview
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {string} req.params.stallId - The ID of the stall to add the review for
 * @param {string} req.body.user - The name of the user adding the review
 * @param {number} req.body.rating - The rating given for the stall (1-5)
 * @param {string} req.body.comment - The comment left for the stall
 * @returns {Object} - The updated stall object with the new review added
 */

const addReview = async (req, res) => {

    const {id} = req.params
    const {food, date_of_visit, rating , comment, reviewImg} = req.body
    if (!rating) {
        final_rating = 0;
    }else {
        final_rating = rating
    }

    const result = await cloudinary.uploader.upload(reviewImg, {
        folder: "ReviewImages",
        // width: 500,
        // crop: "scale"
    })

    const {token} = req.cookies
    //Check for Hawker Privilege
    const userType = await UserModel.checkUserType(token, false)

    if (!userType) {
        return res.status(401).json("Please login before you make a review")
    }
    //Retrieve username from token
    const user = await UserModel.getUser(token)
    const name = user.name
    const date_of_review = new Date().toJSON().slice(0, 10);
    //Retrieve stall & reviewList from id
    const stall = await StallModel.findById(id)
    console.log(final_rating)
    let review = {
        name,
        food,
        date_of_review,
        date_of_visit,
        rating: final_rating,
        comment,
        reviewImg: {
            public_id: result.public_id,
            url: result.secure_url
        }
    }
    stall.reviews.push(review)
    await stall.save()
    StallModel.computeAvgRating(stall._id)
    const updatedStall = await StallModel.findById(id)
    res.cookie("token", token).status(201).send(updatedStall)
}

/**
 * Get all reviews and retrieve the top 5 reviews.
 *
 * @function
 * @async
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {Promise<void>} Returns a promise that resolves when the response is sent.
 */

const getALLReview = async (req, res) =>{
    const reviews = await StallModel.find().select('avg_rating image stall_name description stall_belong').sort({ avg_rating: -1 }).limit(5)
    console.log(reviews)
    // Get all reviews and get the top 5 reviews 
    res.status(200).json(reviews)
}

/**
 * An object containing functions that handle HTTP requests related to stalls.
 * @typedef {Object} StallController
 * @property {function} getAllStalls - A function that retrieves all stalls.
 * @property {function} createStall - A function that creates a new stall.
 * @property {function} getStallById - A function that retrieves a single stall by its ID.
 * @property {function} deleteStallById - A function that deletes a single stall by its ID.
 * @property {function} updateStallById - A function that updates a single stall by its ID.
 * @property {function} addReview - A function that adds a review to a stall.
 * @property {function} getALLReview - A function that retrieves the top 5 stalls by their average rating.
 */

const StallController = {
    getAllStalls,
    createStall,
    getStallById,
    deleteStallById,
    updateStallById,
    addReview,
    getALLReview,
}

module.exports = StallController