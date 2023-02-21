const express = require("express")
const HawkercentreController = require("../controllers/hawkercentre.controller")

// Functions [DO NOT DELETE]
const hawkercentre_router = express.Router()
hawkercentre_router.get("/", HawkercentreController.getAllHawkercentre)
hawkercentre_router.get("/:id", HawkercentreController.getHawkercentreById)
//Get all Stalls from 1 Hawker Centre
// hawkercentre_router.get("/:id/stall", HawkercentreController.getAllStalls)

//Hawker Exclusive Routes
hawkercentre_router.post("/", HawkercentreController.createHawkercentre)
hawkercentre_router.delete("/:id", HawkercentreController.deleteHawkercentreById)
hawkercentre_router.put("/:id", HawkercentreController.updateHawkercentre)

module.exports = hawkercentre_router