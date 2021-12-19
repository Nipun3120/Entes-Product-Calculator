const express = require("express");
const mongoose = require("mongoose");
const httpServer = require("http");
const cors = require('cors');
const apfcModel = require('./models/apfc');
const productsRoute = require('./routes/products');
const choiceFields = require('./routes/choiceFields');

const app = express();
const http = httpServer.createServer(app);
const PORT = 3120;

mongoose.connect("mongodb://localhost/entesdb", ()=> {
    console.log("connected to db"), 
    error=> console.error(error)
})

app.use(express.json({type: 'application/json' }))
app.use(cors({origin:'*'}))

app.use('/products', productsRoute)
app.use('/choice-fields', choiceFields)

http.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));