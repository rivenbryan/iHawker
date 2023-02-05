const app = require("./server.js")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const port = 5000

mongoose.connect(
    process.env.SERVER_URI,
    {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true }
    )
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
    .then(async () => {
      app.listen(port, () => {
        console.log(`Server Running`)
      })
    })

    
