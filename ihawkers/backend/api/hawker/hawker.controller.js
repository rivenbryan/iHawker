import hawker from "../../Hawker.json" assert {type:"json"}

export const getAllHawker=(req, res) => {
    res.status(200).json(hawker)
}

export const createHawker=(req, res) => {
    hawker.push(req.body)
    res.status(201).send()
}

export const getHawkerById=(req, res) => {
    const {id}=req.params
    if (id >= hawker.length) {
        res.status(404).send()
        return
    }
    res.status(200).json(hawker[id])
}

export const deleteHawkerById=(req, res) => {
    const {id}=req.params
    if (id >= hawker.length) {
        res.status(404).send()
        return
    }
    hawker.remove(id)
    res.status(200).send()
}

const HawkerController={
    getAllHawker,
    createHawker,
    getHawkerById,
    deleteHawkerById
}

export default HawkerController