const db=require("../data/config")

function find(){
    return db("tasks")
}

function insert(data)
{
    return db("tasks").insert(data)

}

function findById(id){
    return db("tasks")
            .where("id",id)
            .first()
}

function findByProjectId(id){
    return db("tasks as t")
            .innerJoin("project as p","p.id","t.project_id")
            .select(["p.id as projectId","p.name as projectName","p.description as projectDescription","t.notes"])
            


}


module.exports={
    find,
    insert,
    findById,
    findByProjectId,
}