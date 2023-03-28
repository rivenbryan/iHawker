/**
 * This module contains the Mongoose model for User data
 * @module models/user.model
 */

const mongoose =  require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")

/**
 * The Mongoose schema for User data
 * @typedef {Object} UserSchema
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The hashed password of the user.
 * @property {boolean} isHawker - Whether the user is a hawker or not.
 */

const User = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        isHawker: { type: Boolean, required: true}
    },
    { collection: 'user-data'}
)

/**
 * A static method for logging in a user.
 * @function
 * @async
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @returns {Promise<UserSchema>} - The user object if the login is successful.
 * @throws Will throw an error if the email or password is incorrect or 1 of the fields is not filled.
 */

User.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error("All fields must be filled")
    }
    const user = await this.findOne({email})
    if (!user) {
        throw Error("Incorrect email")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error("Incorrect password")
    }

    return user
}

/**
 * A static method for signing up a user.
 * @function
 * @async
 * @param {UserSchema} userInput - The user input containing the email and password.
 * @returns {Promise<UserSchema>} - The user object if the sign up is successful.
 * @throws Will throw an error if the password is not strong enough,
 * the email is already in use, or the email is not from an authorized domain.
 */

User.statics.signup = async function(userInput){
    //validation
    const {email, password} = userInput
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
    }
    const authorizedDomain = 'e.ntu.edu.sg'; // replace with your authorized domain
    const senderDomain = email.split('@')[1]; // extract sender domain
    if (senderDomain !== authorizedDomain) {
      throw Error("Invalid Email. Please type in an email format.") // update state variable
    }

    //check if email already in use
    const exist = await this.findOne({email})
    if (exist) {
        throw Error("Email already in use")
    }

    //password hashing
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({...userInput, password: hash})

    return user
}

/**
 * Retrieves a user based on their JWT token.
 * @function
 * @async
 * @param {string} token - The JWT token containing user information.
 * @returns {Promise<User>} The User object associated with the token.
 */

User.statics.getUser = async function(token) {
    console.log(token)
    if (!token) return null
    const tokenInfo = await jwt.verify(token, process.env.SECRET)
    const user = await this.findById(tokenInfo.id)
    return user
}

/**
 * Checks if a user is of a certain type based on their JWT token.
 * @function
 * @async
 * @param {string} token - The JWT token containing user information.
 * @param {boolean} checkHawker - Whether or not to check if the user is a hawker.
 * @returns {Promise<boolean>} A boolean indicating if the user is of the specified type.
 */

User.statics.checkUserType = async function(token, checkHawker) {
    const user = await this.getUser(token)
    console.log(user)
    //I want to give Hawker Privilege
    if (checkHawker) {
        //return True if user exist + user is Hawker
        return user && user.isHawker
    }
    //return True if user exist
    return !!user
}

const UserModel = mongoose.model('UserData', User)
module.exports = UserModel