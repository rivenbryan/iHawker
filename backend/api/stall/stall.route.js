const express = require("express")
const StallController = require("./stall.controller.js")

const stall_router = express.Router()
stall_router.get("/", StallController.getAllHawkerStalls)
stall_router.post("/", StallController.createHawkerStall)
stall_router.get("/:id", StallController.getStallById)
stall_router.delete("/:id", StallController.deleteStallById)

module.exports = stall_router

