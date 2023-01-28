const hawker_stall = [
    {
        name: "chicken rice stall",
        location: "amk",
        item: "chicken rice"
    }, 
    {
        name: "noodle stall",
        location: "amk",
        item: "wanton noodle"    
    }, 
    {
        name: "western stall",
        location: "amk",
        item: "chicken chop"    
    }
]

export const getAllHawkerStalls=(req, res) => {
    res.status(200).json(hawker_stall)
}

export const createHawkerStall=(req, res) => {
    hawker_stall.push(req.body)
    res.status(201).send()
}

export const getStallById=(req, res) => {
    const {id}=req.params
    if (id >= hawker_stall.length) {
        res.status(404).send()
        return
    }
    res.status(200).json(hawker_stall[id])
}

export const deleteStallById=(req, res) => {
    const {id}=req.params
    if (id >= hawker_stall.length) {
        res.status(404).send()
        return
    }
    hawker_stall.remove(id)
    res.status(200).send()
}

const StallController={
    getAllHawkerStalls,
    createHawkerStall,
    getStallById,
    deleteStallById
}

export default StallController