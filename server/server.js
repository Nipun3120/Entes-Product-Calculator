const express = require("express");
const mongoose = require("mongoose");
const httpServer = require("http");
const cors = require('cors');
const apfcModel = require('./models/apfc');

const app = express();
const http = httpServer.createServer(app);
const PORT = 3120;

app.use(express.json({type: 'application/json' }))
app.use(cors({origin:'*'}))

mongoose.connect("mongodb://localhost/entesdb", ()=> {
    console.log("connected to db"), 
    error=> console.error(error)
})


app.post('/products/apfc', async (req, res)=> {
    const newApfc = new apfcModel({
        type: req.body.type,
        model: req.body.model,
        noOfSteps: req.body.noOfSteps,
        price: req.body.price,
        discount: req.body.discount
    })

    try{
        const dbResponse = await newApfc.save();
        console.log(dbResponse)
        res.status(201).send('success!')
    } catch (error) {
        res.status(400).json({'error': error}).send('product insertion failed')
    }
    
})

app.get('/products/apfc', async (req, res)=> {
    apfcModel.find({}, (err, products)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(products)
    })

})


http.listen(PORT, ()=> console.log(`Server listening on port: ${PORT}`));