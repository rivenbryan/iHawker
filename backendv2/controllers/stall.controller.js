const jwt = require("jsonwebtoken")
const StallModel = require("../models/stall.model")
const UserModel = require("../models/user.model")
const cloudinary = require('../utils/cloudinary')

const getAllStalls= async (req, res) => {
    const stalls = await StallModel.find().sort({no_of_stalls: -1})
    res.status(200).json(stalls)
}

const createStall= async (req, res) => {
    const { stall_name, description, menu_item, topseller, hawker_centre_belong, stall_belong, image} = req.body
    const {token} = req.cookies
    // const avg_rating = Number(0)
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
    res.cookie("token", token).status(201).json(stall).send()
}

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

const addReview = async (req, res) => {

    const {id} = req.params
    const {food, date_of_visit, rating , comment, reviewImg} = req.body
 
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

    let review = {
        name,
        food,
        date_of_review,
        date_of_visit,
        rating: rating,
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

const getALLReview = async (req, res) =>{
    const reviews = await StallModel.find().select('avg_rating image stall_name description stall_belong').sort({ avg_rating: -1 }).limit(5)
    console.log(reviews)
    // Get all reviews and get the top 5 reviews 
    res.status(200).json(reviews)
}

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