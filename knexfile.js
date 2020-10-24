module.exports={
    development:{
        client:"sqlite3",
        useNullAsDefault:true,//need for sqlite
        connection:{
            filename:"./data/project.db3",
        },
        migration:{
            directory:"./data/migrations"
        },
        seed:{
            directory:"./data/seeds"
        },

        //Foreign Key NEEDED FOR SQLITE3
        pool:{
            afterCreate:(conn,done)=>{
                conn.run("PRAGMA foreign_keys=ON")
            },
        }
    }
}