

const stall_router = require("./api/stall/stall.route.js")
const hawker_router = require("./api/hawker/hawker.route.js")

const express = require("express")
const mongoose = require("mongoose")
var cors = require("cors")


// Middleware //
app.use(cors())
app.use(express.json())

app.use("/api/hawker", hawker_router)
app.use("/api/stall", stall_router)


app.listen(5000, () => console.log("Server Running on 5000"))









// const User = require('./models/user.model')

// app.post('/api/register', async (req, res) => {
//     try {
//         const user = await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             pasword: req.body.pasword,
//         })
//         res.json({status: 'ok'})
//     } catch (error) {
//         res.json({status: 'error', error: 'Duplicate email'})
//     }
   
// })

// app.post('/api/login', async (req, res) => {

//     const user = await User.findOne({
//         email: req.body.email,
//         pasword: req.body.pasword,
//     })
//     if (user){
//         return res.json({status: 'ok', user: true})
//     }else {
//         return res.json({status: 'error', user: false})
//     }
    
   
// })