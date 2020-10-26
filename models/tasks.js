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


module.exports={
    find,
    insert,
    findById
}