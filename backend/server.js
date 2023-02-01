import express from "express"
import cors from "cors"
import stall_router from "./api/stall/stall.route.js"
import hawker_router from "./api/hawker/hawker.route.js"
import mongoose from "mongoose"

const app = express()
const User = require('./models/user.model')

mongoose.connect('mongodb://localhost:2701/ihawker')

// Middleware //
app.use(cors())
app.use(express.json())

app.use("/api/hawker", hawker_router)
app.use("/api/stall", stall_router)
// app.use("*", (req, res) => res.status(404).json({ error: "not found"}))


app.get('/hello', (req,res)=> {
    res.send('hello world')
})


app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            pasword: req.body.pasword,
        })
        res.json({status: 'ok'})
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
   
})

app.post('/api/login', async (req, res) => {

    const user = await User.findOne({
        email: req.body.email,
        pasword: req.body.pasword,
    })
    if (user){
        return res.json({status: 'ok', user: true})
    }else {
        return res.json({status: 'error', user: false})
    }
    
   
})
app.listen(5000, () => console.log("Server Running on 5000"))

export default app