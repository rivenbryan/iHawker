import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000
export let CLIENT
export let hawkerCollection
export let stallCollection

MongoClient.connect(
    process.env.HAWKERDB_URI,
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
      CLIENT = (new MongoClient(process.env.HAWKERDB_URI)).db("hawkercentre");
      hawkerCollection = CLIENT.collection("hawker")
      stallCollection = CLIENT.collection("stall")
    })

    
