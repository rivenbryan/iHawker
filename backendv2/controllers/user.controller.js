const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const postmark = require("postmark");
const bcrypt = require("bcrypt");
const validator = require("validator")

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: "3d"} )
}

const loginUser = async (req,res) =>{
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create token
        const token = createToken(user.id)

        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req,res) => {
    const {name, email, password, isHawker} = req.body

    try {
        const user = await User.signup({name, email, password, isHawker})
        
        //create token
        const token = createToken(user.id)

        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const resetPassword = async (req, res) => {
    const {newPassword, token} = req.body
    const {email, purpose} = jwt.verify(token, process.env.SECRET)
    //Check purpose
    if (purpose != "Reset Password") {
        return res.status(400).json({error: "Invalid Token"})
    }
    //Retrieve user
    const user = await User.findOne({email})
    if (user == null) {
        return res.status(400).json({error: "User not found"})
    }
    //Hash the newPassword
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)
    user.password = hash
    await user.save()
    res.status(200).json("Successfully reset password")
}

const sendEmail = async (req,res) => {
    const {email} = req.body
    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Invalid email format"})
    }
    //Check for user
    const user = await User.findOne({email})
    if (user == null) {
        return res.status(404).json({error: "User not found, try again"})
    }
    // Send an email:
    const client = new postmark.ServerClient(process.env.API_TOKEN)
    const token = jwt.sign({email, purpose: "Reset Password"}, process.env.SECRET, {expiresIn: "3d"} )
    client.sendEmail({
    "From": "atan134@e.ntu.edu.sg",
    "To": email,
    "Subject": "Password Reset",
    "TextBody": "Hi, please click the url below to reset passwod" +
    `http://localhost:3000/forgetPasswordEmail?token=${token}`,
    "MessageStream": "outbound"
    })
    res.status(201).json("Successfully sent email")
}
const userController = {
    loginUser,
    signupUser,
    resetPassword,
    sendEmail
}

module.exports = userController
