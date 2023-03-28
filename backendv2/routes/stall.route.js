/**
 * @file stall.route.js is a file responsible for defining and handling routes related to stalls.
 * @version 1.0.0
 * @requires express
 * @requires StallController
 */

const express = require("express")
const StallController = require("../controllers/stall.controller")

/**
 * Express router to mount stall related functions on.
 * @type {object}
 * @const
 * @namespace stall_router
 */
const stall_router = express.Router()

/**
 * Route for getting all stalls.
 * @name get/stall
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.get("/", StallController.getAllStalls)

/**
 * Route for getting a stall by ID.
 * @name get/stall/:id
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.get("/:id", StallController.getStallById)

/**
 * Route for creating a new stall.
 * @name post/stall
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.post("/", StallController.createStall)

/**
 * Route for deleting a stall by ID.
 * @name delete/stall/:id
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.delete("/:id", StallController.deleteStallById)

/**
 * Route for updating a stall by ID.
 * @name put/stall/:id
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.put("/:id", StallController.updateStallById)

/**
 * Route for adding a review to a stall by ID.
 * @name post/stall/:id/review
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.post("/:id/review", StallController.addReview)

/**
 * Route to get all reviews.
 * @name get/stall/review/getreviews
 * @function
 * @memberof module:stall.route.js
 * @inner
 * @param {string} path - Express path.
 * @param {callback} middleware - Express middleware.
 */
stall_router.get("/review/getreviews", StallController.getALLReview)

module.exports = stall_router
