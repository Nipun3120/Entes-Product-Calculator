const express = require("express")
const mongoose = require("mongoose");
const apfcModel = require('../models/apfc');

const route = express.Router();

route.post('/apfc', async (req, res)=> {
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

route.get('/apfc', async (req, res)=> {
    apfcModel.find({}, (err, products)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(products)
    })

})

module.exports = route