const express = require("express")
const project = require("../models/project")


const router = express.Router()

router.get("/projects", async (req, res, next) => {
    try {
        const projects = await project.find()
        res.json(projects)

    }
    catch (err) {

    }
})

router.post("/projects", async (req, res, next) => {
    try {
        if(req.body.name){
            const [id] = await project.insert(req.body)
            const data=await project.findById(id)
           res.status(201).json(data)

        }
        else{
          res.status(404).json({
              message:"PLease type name of project"
          })
        }
        
    }
    catch (err) {

    }
})

module.exports = router