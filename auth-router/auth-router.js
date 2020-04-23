const express = require("express");
const bcrypt = require("bcrypt");
const Accounts = require("../accounts-router/accounts-model.js");

const server = express.Router();


server.post("/login", (req,res) =>{

    const {username, password} = req.body;


    Accounts.findBy(username)
        .then(account =>{

            if(account && bcrypt.compareSync(password, account.password)){
                req.session.user = username;


                res.status(200).json({id: account.id, username})
                
            } else{
                res.status(401).json({message:"Credentials Incorrect"})
            }
        })
        .catch(err => res.status(500).json({errorMessage:"Unable to login, Server Error"}))



})

server.post("/register", (req,res) =>{
    
    let {username,password} = req.body;

    Accounts.findBy(username)
        .then(user =>{

            if(user){
                res.status(401).json({message:"Username is already taken"})
            } else {

                const hash = bcrypt.hashSync(password, 12)

                password = hash

                Accounts.add({username,password})
                    .then(info => {
                        res.status(201).json(info)
                    })
                    .catch(err => res.status(500).json({errorMessage:"Unable to create Account"}))
            }

        })

    

})


module.exports = server ;