const db=require("../data/config")

function find(){
    return db("resource")
}

function insert(data)
{
    return db("resource").insert(data)

}

function findById(id){
    return db("resource")
            .where("id",id)
            .first()
}


module.exports={
    find,
    insert,
    findById
}