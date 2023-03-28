// Requirements [DO NOT EDIT!!!!]
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()


/**
 * Enable Cross-Origin Resource Sharing and Cookie Parsing middleware.
 * @name enableMiddlewares
 * @function
 * @memberof app
 * @inner
 */
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
  }))

app.use(cookieParser())
  
/**
   * Enable JSON parsing middleware with a limit of 50MB.
   * @name enableJSONParsing
   * @function
   * @memberof app
   * @inner
*/
app.use(express.json({
    limit: '50mb'
}))
  
/**
   * Log request path and method to console.
   * @name logRequest
   * @function
   * @memberof app
   * @inner
*/
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})
  
// ROUTES TO ADD
  
/**
   * Router for managing hawker centres.
   * @name hawkerCentreRouter
   * @constant
   * @type {Router}
   * @memberof app
   * @inner
*/
const hawkerCentreRouter = require("./routes/hawkercentre.route")
app.use('/api/hawkercentre', hawkerCentreRouter)
  
/**
   * Router for managing user authentication.
   * @name userRouter
   * @constant
   * @type {Router}
   * @memberof app
   * @inner
*/
const userRouter = require("./routes/user.route.js")
app.use('/api/auth', userRouter)

/**
   * Router for managing stalls.
   * @name stallRouter
   * @constant
   * @type {Router}
   * @memberof app
   * @inner
*/
const stallRouter = require("./routes/stall.route.js")
app.use('/api/stall', stallRouter)

// CONNECTION TO DATABASE

/**
   * Connects to the MongoDB database and starts the server.
   * @name startServer
   * @function
   * @memberof app
   * @inner
*/
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(4000, () => {
            console.log('Connected to database and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
})