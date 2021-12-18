const express = require("express");
const httpServer = require("http");

const app = express();
const http = httpServer.createServer(app);
const PORT = 3120;



http.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`))
