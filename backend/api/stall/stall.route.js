import express from "express"
import StallController from "./stall.controller.js"

const hawker_router = express.Router()
hawker_router.get("/", StallController.getAllHawkerStalls)
hawker_router.post("/", StallController.createHawkerStall)
hawker_router.get("/:id", StallController.getStallById)
hawker_router.delete("/:id", StallController.deleteStallById)

export default hawker_router