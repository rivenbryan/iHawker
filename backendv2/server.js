// Requirements [DO NOT EDIT!!!!]
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()

// middleware [DO NOT EDIT!!!!]
app.use(cors({
    origin : "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

// ROUTES TO ADD
const hawkercentre_router = require("./routes/hawkercentre.route")
const user_router = require("./routes/user.route.js")
const stall_router = require("./routes/stall.route.js")



// End Point
app.use('/api/hawkercentre', hawkercentre_router)
app.use('/api/auth', user_router)
app.use('/api/stall', stall_router)

// CONNECTION TO DATABASE [DO NOT EDIT!!!]
mongoose.connect(process.env.MONGO_URI)
    .then( ()=> {
        // Listen only if mongoose is connected
        app.listen(4000, () => {
            console.log('Connected to database and listening on port 4000')
        })
    })
    // Catch the error if server is unable to connect to mongoose
    .catch( (error)=> {
        console.log(error)
    })
