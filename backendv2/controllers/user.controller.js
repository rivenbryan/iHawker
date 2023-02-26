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
        const token = createToken(user.id)

        res.status(200).json({user, token})
    } catch (error) {
         res.status(400).json({error: error.message})   
    }
}

const resetPassword = async (req, res) => {
    const {email, newPassword} = req.body

    //Retrieve user
    const user = await User.findOne({email})

    if (user == null) {
        res.status(400).json("User not found")
    }
    //Hash the newPassword
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(newPassword, salt)
    user.password = hash
    await user.save()
    res.status(200).json("Successfully reset password")
}

const userController = {
    loginUser,
    signupUser,
    resetPassword
}

module.exports = userController
