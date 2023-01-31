import express from "express"
import cors from "cors"
import stall_router from "./api/stall/stall.route.js"
import hawker_router from "./api/hawker/hawker.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/hawker", hawker_router)
app.use("/api/stall", stall_router)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app