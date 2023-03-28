/**
 * @file hawkercentre.route.js is a file responsible for defining and handling routes related to hawker centre.
 * @version 1.0.0
 * @requires express
 * @requires HawkercentreController
 */

const express = require("express")
const HawkercentreController = require("../controllers/hawkercentre.controller")

/**
 * Express router for managing hawker centres.
 * @name hawkercentre_router
 * @constant
 * @type {object}
 */
const hawkercentre_router = express.Router()

/**
 * Route for getting all hawker centres.
 * @name getAllHawkercentre
 * @function
 * @memberof hawkercentre_router
 * @inner
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the request-response cycle.
 */
hawkercentre_router.get("/", HawkercentreController.getAllHawkercentre)

/**
 * Route for getting a hawker centre by ID.
 * @name getHawkercentreById
 * @function
 * @memberof hawkercentre_router
 * @inner
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the request-response cycle.
 * @param {string} req.params.id - The ID of the hawker centre to retrieve.
 */
hawkercentre_router.get("/:id", HawkercentreController.getHawkercentreById)

/**
 * Route for creating a new hawker centre.
 * @name createHawkercentre
 * @function
 * @memberof hawkercentre_router
 * @inner
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the request-response cycle.
 * @param {string} req.body.name - The name of the new hawker centre.
 */
hawkercentre_router.post("/", HawkercentreController.createHawkercentre)

/**
 * Route for deleting a hawker centre by ID.
 * @name deleteHawkercentreById
 * @function
 * @memberof hawkercentre_router
 * @inner
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the request-response cycle.
 * @param {string} req.params.id - The ID of the hawker centre to delete.
 */
hawkercentre_router.delete("/:id", HawkercentreController.deleteHawkercentreById)

/**
 * Route for updating a hawker centre by ID.
 * @name updateHawkercentre
 * @function
 * @memberof hawkercentre_router
 * @inner
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 * @param {function} next - The next middleware function in the request-response cycle.
 * @param {string} req.params.id - The ID of the hawker centre to update.
 * @param {object} req.body - The updated hawker centre data.
 */
hawkercentre_router.put("/:id", HawkercentreController.updateHawkercentre)

module.exports = hawkercentre_router
