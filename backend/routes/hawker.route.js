const express = require("express")
const HawkerController = require("../controller/hawker.controller")

const hawker_router = express.Router()
hawker_router.get("/", HawkerController.getAllHawker)
hawker_router.post("/", HawkerController.createHawker)
hawker_router.get("/:id", HawkerController.getHawkerById)
hawker_router.delete("/:id", HawkerController.deleteHawkerById)

module.exports = hawker_router