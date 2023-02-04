
const express = require('express')
const {
    gethawkerCentre, 
    createhawkerCentre
} = require("../controllers/hawkercentreControllers")

const router = express.Router()

// GET all workouts
router.get('/', gethawkerCentre)
router.post('/', createhawkerCentre)
module.exports = router

// })