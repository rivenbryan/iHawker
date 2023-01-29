import express from "express"
import StallController from "./stall.controller.js"

const stall_router = express.Router()
stall_router.get("/", StallController.getAllHawkerStalls)
stall_router.post("/", StallController.createHawkerStall)
stall_router.get("/:id", StallController.getStallById)
stall_router.delete("/:id", StallController.deleteStallById)

export default stall_router