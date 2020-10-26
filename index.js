const express=require("express")
const helmet=require("helmet")
 const project=require("./router/project")
// const resource=require("./router/resource")
// const task=require("./router/task")

const server=express()
const port=process.env.PORT||4000

server.use(helmet())
server.use(express.json())
server.use(project)
// server.use(resource)
// server.use(task)


server.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).json({
        message:"something went wrong"
    })
})
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})