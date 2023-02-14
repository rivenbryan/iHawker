const mongoose =  require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")

const User = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        // Remove quote 
        isHawker: { type: Boolean, required: true} 
    },
    { collection: 'user-data'}
)

//static login method
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

    return { id: user._id }
}

// static signup method
User.statics.signup = async function(userInput){
    //validation
    const {name, email, password, isHawker} = userInput
    if (!name || !email || !password || (isHawker == undefined)) {
        throw Error("All fields must be filled")
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid email")
    }
    // if (!validator.isStrongPassword(password)) {
    //     throw Error("Password is not strong enough")
    // }

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

//check if user is Hawker or Customer
User.statics.checkHawker = async function(id) {
    const user = await this.findById(id)
    if (!user) {
        return null
    }
    return user.isHawker
}

User.statics.verifyToken = async function(token) {
    const tokenInfo = await jwt.verify(token, process.env.SECRET)
    return tokenInfo.id
}

const UserModel = mongoose.model('UserData', User)
module.exports = UserModel