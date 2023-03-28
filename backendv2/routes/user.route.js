/**
 * @file user.route.js
 * @description Routes for user authentication and account management.
 * @requires express
 * @requires ../controllers/user.controller
 */

const userController = require("../controllers/user.controller")
const express = require("express")

/**
 * Express router for user routes.
 * @type {object}
 * @const
 * @namespace user_router
 */
const user_router = express.Router()

/**
 * Route for user sign up.
 * @name POST /api/auth/signup
 * @function
 * @memberof user_router
 * @inner
 * @param {object} req - Express request object.
 * @param {object} req.body - Request body containing user sign up details.
 * @param {string} req.body.email - User email.
 * @param {string} req.body.password - User password.
 * @param {string} req.body.username - User username.
 * @param {string} req.body.phone - User phone number.
 * @param {object} res - Express response object.
 * @returns {object} Response object containing success message or error message.
 */
user_router.post("/signup", userController.signupUser)

/**
 * Route for user login.
 * @name POST /api/auth/login
 * @function
 * @memberof user_router
 * @inner
 * @param {object} req - Express request object.
 * @param {object} req.body - Request body containing user login details.
 * @param {string} req.body.email - User email.
 * @param {string} req.body.password - User password.
 * @param {object} res - Express response object.
 * @returns {object} Response object containing user token or error message.
 */
user_router.post("/login", userController.loginUser)

/**
 * Route for resetting user password.
 * @name POST /api/auth/reset-password
 * @function
 * @memberof user_router
 * @inner
 * @param {object} req - Express request object.
 * @param {object} req.body - Request body containing user email.
 * @param {string} req.body.email - User email.
 * @param {object} res - Express response object.
 * @returns {object} Response object containing success message or error message.
 */
user_router.post("/reset-password", userController.resetPassword)

/**
 * Route for sending email to user.
 * @name POST /api/auth/send-email
 * @function
 * @memberof user_router
 * @inner
 * @param {object} req - Express request object.
 * @param {object} req.body - Request body containing user email.
 * @param {string} req.body.email - User email.
 * @param {object} res - Express response object.
 * @returns {object} Response object containing success message or error message.
 */
user_router.post("/send-email", userController.sendEmail)

/**
 * Route for user logout.
 * @name POST /api/auth/logout
 * @function
 * @memberof user_router
 * @inner
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} Response object containing success message or error message.
 */
user_router.post("/logout", userController.logoutUser)

module.exports = user_router
