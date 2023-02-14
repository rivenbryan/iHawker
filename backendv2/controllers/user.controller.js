const User = require("../models/user.model")
const jwt = require("jsonwebtoken")

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
        console.log(User.verifyToken(token))
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

const userController = {
    loginUser,
    signupUser
}

module.exports = userController
