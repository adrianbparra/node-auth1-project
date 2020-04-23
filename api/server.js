const express = require("express")

const server = express();


const authRouter = require("../auth-router/auth-router.js");
const accountsRouter = require("../accounts-router/accounts-router.js");


server.use(express.json())

server.use("/api/auth", authRouter);
server.use("/api/accounts", accountsRouter)


server.get("/", (res,req) =>{
    res.json({message: "Server running"})
})






module.exports = server;