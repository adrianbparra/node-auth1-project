const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const restricted = require("../auth-router/restricted-router.js");

const server = express();


const authRouter = require("../auth-router/auth-router.js");
const accountsRouter = require("../accounts-router/accounts-router.js");

const sessionConfig = {
    name: "accountSession",
    secret: "Very $ecret $ecret",
    cookie: {
        maxAge: 1 * 24 * 60  * 60 * 1000,
        secure: false,

    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
}

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));


server.use("/api/auth", authRouter);
server.use("/api/accounts", restricted, accountsRouter)


server.get("/", (res,req) =>{
    res.json({message: "Server running"})
})






module.exports = server;