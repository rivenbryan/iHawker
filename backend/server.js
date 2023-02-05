const stall_router = require("./api/stall/stall.route.js")
const hawker_router = require("./routes/hawker.route.js")
const user_router = require("./routes/user.route.js")

const express = require("express")
const mongoose = require("mongoose")
var cors = require("cors")


const app = express()

// Middleware //
app.use(cors())
app.use(express.json())

app.use("/hawker", hawker_router)
app.use("/stall", stall_router)
app.use("/auth", user_router)

module.exports = app

