const express = require("express");
const mongoose = require("mongoose");
const httpServer = require("http");

const app = express();
const http = httpServer.createServer(app);
const PORT = 3120;

mongoose.connect("mongodb://localhost/entesdb", ()=> {
    console.log("connected to db"), 
    error=> console.error(error)
})


http.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`))
