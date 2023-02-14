const express = require("express")
const StallController = require("../controllers/stall.controller")

// Functions [DO NOT DELETE]
const stall_router = express.Router()
stall_router.get("/", StallController.getAllStalls)
stall_router.get("/:id", StallController.getStallById)

//Hawker Exclusive Routes
stall_router.post("/", StallController.createStall)
stall_router.delete("/:id", StallController.deleteStallById)
stall_router.put("/:id", StallController.updateStallById)

//User Exclusive Routes
stall_router.post("/:id/review", StallController.addReview)

module.exports = stall_router