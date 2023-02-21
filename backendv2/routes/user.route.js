const userController = require("../controllers/user.controller")
const express = require("express")

const user_router = express.Router()
user_router.post("/signup", userController.signupUser)
user_router.post("/login", userController.loginUser)
user_router.post("/reset-password", userController.resetPassword)
user_router.post("/send-email", userController.sendEmail)

module.exports = user_router
