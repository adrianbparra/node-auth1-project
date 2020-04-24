const db = require("../database/db-config.js");


function find() {
    return db("accounts").select("id","username")
}

function findBy(username){
    return db("accounts").where({username}).first()
}

function add(accountInfo){
    return db("accounts").insert(accountInfo)
}


module.exports= { 
    find,
    findBy,
    add,

}