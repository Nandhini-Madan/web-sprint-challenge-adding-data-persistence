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

function findByProjectId(){
    return db("tasks as t")
            .innerJoin("project as p","p.id","t.project_id")
            .select(["*"])

}


module.exports={
    find,
    insert,
    findById,
    findByProjectId,
}