const express = require("express");

const server = express.Router();

const Accounts = require("./accounts-model.js")


server.get("/", (req,res) =>{

    Accounts.find()
        .then(accounts =>{
            res.status(200).json(accounts)
        })
        .catch(err => res.status(500).json({errorMessage: "Unable to retreive Accounts"}))


})

server.get("/:username", (req,res) =>{

    const {username} = req.params;

    Accounts.findBy(username)
        .then(account => {
            res.status(201).json(account)
        })
        .catch(err=> res.status(500).json({errorMessage: "Unable to retreive Account"}))
})


module.exports = server;