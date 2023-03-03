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
        const token = createToken(user._id)

        res.cookie("token",token).status(200).json(user).send()
        // User.verifyToken(token)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req,res) => {
    const {name, email, password, isHawker} = req.body

    try {
        const user = await User.signup({name, email, password, isHawker})
        
        //create token
        const token = createToken(user._id)
        res.cookie("token", token).status(200).json(user).send()

    } catch (error) {
        res.status(400).json({error: error.message}) // .cookie("token", token)
    }
}


const logoutUser = async (req,res) => {
    res.clearCookie("token").status(201).send()
}

const resetPassword = async (req, res) => {
    const {newPassword} = req.body
    const {token} = req.cookies
    const {email, purpose} = jwt.verify(token, process.env.SECRET)

    //Check purpose
    if (purpose != "Reset Password") {
        return res.cookie("token", token).status(400).json("Invalid Token")
    }
    //Retrieve user
    const user = await User.findOne({email})
    if (!validator.isStrongPassword(newPassword)) {
        return res.cookie("token", token).status(400).json("Password is not strong enough")
    }

    //Hash the newPassword
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)
    user.password = hash
    await user.save()
    res.cookie("token", token).status(200).json("Successfully reset password")
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
    "Subject": "[RESET] iHawker Password Reset",
    "TextBody": "Hi User," +
    "\n\nWe have received a request to reset the password for your account. If you did not make this request, please ignore this email. To reset your password, please click on the following link:" +
    `\n\nhttp://localhost:3000/forgetPasswordEmail?token=${token}` +
    "\n\nIf you have any questions or concerns, please reply to this email." +
    "\n\nBest regards," +
    "\niHawker",
    "MessageStream": "outbound"
    })
    res.cookie("token", token).status(201).json("Successfully sent email").send()
}
const userController = {
    loginUser,
    signupUser,
    resetPassword,
    logoutUser,
    resetPassword,
    sendEmail
}

module.exports = userController
