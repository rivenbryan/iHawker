const express = require("express")
const HawkercentreController = require("../controllers/hawkercentre.controller")

// Functions [DO NOT DELETE]
const hawkercentre_router = express.Router()
hawkercentre_router.get("/", HawkercentreController.getAllHawkercentre)
hawkercentre_router.get("/:id", HawkercentreController.getHawkercentreById)

//Hawker Exclusive Routes
hawkercentre_router.post("/", HawkercentreController.createHawkercentre)
hawkercentre_router.delete("/:id", HawkercentreController.deleteHawkercentreById)
hawkercentre_router.put("/:id", HawkercentreController.updateHawkercentre)

module.exports = hawkercentre_router