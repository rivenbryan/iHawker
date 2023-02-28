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

    return user
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
    if (!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
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

User.statics.getUser = async function(token) {
    console.log(token)
    if (!token) return null
    const tokenInfo = await jwt.verify(token, process.env.SECRET)
    const user = await this.findById(tokenInfo.id)
    return user
}

//Check for JWT token + user is Hawker
//checkHawker = True when checking for Hawker Privilege Otherwise is False
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