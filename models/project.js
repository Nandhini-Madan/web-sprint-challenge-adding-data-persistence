const db=require("../data/config")

function find(){
    return db("project")
}

function insert(data)
{
    return db("project").insert(data)

}

function findById(id){
    return db("project")
            .where("id",id)
            .first()
}


module.exports={
    find,
    insert,
    findById
}