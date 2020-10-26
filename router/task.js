const express = require("express")
const task = require("../models/tasks")


const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    try {
        const tasks = await task.find()
        res.json(tasks)

    }
    catch (err) {

    }
})

router.post("/tasks", async (req, res, next) => {
    try {
        if (req.body.description) {
            const [id] = await task.insert(req.body)
            const data = await task.findById(id)
            res.status(201).json(data)

        }
        else {
            res.status(404).json({
                message: "PLease type name of task"
            })
        }

    }
    catch (err) {
        next(err)
    }
})

router.get("/tasks1", async (req, res, next) => {
    try {
        const tasks = await task.findByProjectId()
        res.json(tasks)

    }
    catch (err) {

    }
})

module.exports = router