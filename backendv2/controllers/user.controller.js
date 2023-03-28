const User = require("../models/user.model")
const jwt = require("jsonwebtoken")
const postmark = require("postmark");
const bcrypt = require("bcrypt");
const validator = require("validator")

/**
 * Function to create a JWT token using user ID and SECRET
 * @param {string} id - user ID
 * @returns {string} - JWT token
 */

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: "3d"} )
}

/**
 * Function to handle login requests for users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - response object containing logged in user details and JWT token
 */

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

/**
 * Function to handle signup requests for users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - response object containing newly signed up user details and JWT token
 */

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


/**
 * Function to handle logout requests for users
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - response object indicating successful logout
 */

const logoutUser = async (req,res) => {
    res.clearCookie("token").status(201).send()
}

/**
 * Function to reset user password
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - response object indicating success or error in password reset
 */

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

/**
 * Function to send reset password email to user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - response object indicating success or error in sending reset password email
 */

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

/**
 * Controller object for user-related actions.
 * @typedef {Object} userController
 * @property {function} createUser - Creates a new user.
 * @property {function} updateUser - Updates an existing user.
 * @property {function} deleteUser - Deletes a user.
 * @property {function} getUserById - Retrieves a user by ID.
 * @property {function} getAllUsers - Retrieves all users.
 * @property {function} authenticateUser - Authenticates a user.
 * @property {function} authorizeUser - Authorizes a user.
 */

const userController = {
    loginUser,
    signupUser,
    resetPassword,
    logoutUser,
    resetPassword,
    sendEmail
}

module.exports = userController
