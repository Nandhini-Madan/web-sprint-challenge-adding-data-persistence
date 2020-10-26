const express=require("express")
const project=require("../models/project")


const router=express.Router()

router.get("/projects",async (req,res,next)=>{
    try{
const projects=await project
    }
    catch(err){

    }
})