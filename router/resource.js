const express = require("express")
const resource = require("../models/resource")


const router = express.Router()

router.get("/resources", async (req, res, next) => {
    try {
        const resources = await resource.find()
        res.json(resources)

    }
    catch (err) {

    }
})

router.post("/resources", async (req, res, next) => {
    try {
        if (req.body.name) {
            const [id] = await resource.insert(req.body)
            const data = await resource.findById(id)
            res.status(201).json(data)

        }
        else {
            res.status(404).json({
                message: "PLease type name of resource"
            })
        }

    }
    catch (err) {
        next(err)
    }
})

module.exports = router