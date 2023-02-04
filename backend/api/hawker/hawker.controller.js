// import {hawkerCollection} from "../../index.js"
// import {ObjectId} from "mongodb"


// export const getAllHawker= async (req, res) => {
//     const hawkers = await hawkerCollection.find({}).toArray()
//     res.status(200).json(hawkers)
// }

// export const createHawker= async (req, res) => {
//     const insertedOutput = await hawkerCollection.insertOne(req.body)
//     const insertedHawker = await hawkerCollection.findOne({_id: insertedOutput.insertedId})
//     if (insertedHawker == null) {
//         res.status(500).send("Request failed")
//         return
//     }
//     res.status(201).send(insertedHawker)
// }

// export const getHawkerById= async (req, res) => {
//     const {id}=req.params
//     let hawker
//     try {
//         hawker = await hawkerCollection.findOne({_id: new ObjectId(id)})
//     } catch (err) {
//         res.status(400).send("Invlaid ID not found")
//         return
//     }
//     if(hawker == null) {
//         res.status(404).send("Hawker not found")
//         return
//     }
//     res.status(200).json(hawker)
// }



// export const deleteHawkerById= async (req, res) => {
//     const {id}=req.params
//     let hawker
//     try {
//         hawker = await hawkerCollection.findOne({_id: new ObjectId(id)})
//     }
//     catch (err) {
//         res.status(400).send("Invlaid ID not found")
//         return
//     }
//     if(hawker == null) {
//         res.status(404).send("Hawker not found")
//         return
//     }
//     await hawkerCollection.deleteOne({_id: new ObjectId(id)})
//     res.status(200).send()
// }



// const HawkerController={
//     getAllHawker,
//     createHawker,
//     getHawkerById,
//     deleteHawkerById
// }

// export default HawkerController