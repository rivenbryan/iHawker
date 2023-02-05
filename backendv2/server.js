// Requirements [DO NOT EDIT!!!!]
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()

// middleware [DO NOT EDIT!!!!]
app.use(cors())
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

// ROUTES TO ADD
const hawkercentre_router = require("./routes/hawkercentre.route")
const user_router = require("./routes/user.route.js")


// End Point
app.use('/api/hawkercentre', hawkercentre_router)
app.use('/auth', user_router)



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
