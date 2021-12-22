const express = require("express")
const objectId = require("mongodb").ObjectId;
const apfcModel = require('../models/apfc');
const contModel = require('../models/contractor');

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
        res.status(201).json({'message': 'apfc object created successfully'})
    } catch (error) {
        res.status(400).json({'error': error}).send('product insertion failed')
    }
    
})
route.post('/contactor', async (req, res)=> {
    const newApfc = new contModel({
        rating: req.body.rating,
        model: req.body.model,
        price: req.body.price,
        discount: req.body.discount
    })

    try{
        const dbResponse = await newApfc.save();
        console.log(dbResponse)
        res.status(201).json({'message': 'contactor object created successfully'})
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
route.get('/contactor', async (req, res)=> {
    contModel.find({}, (err, products)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(products)
    })

})


route.delete('/apfc', async(req, res)=> {
   apfcModel.deleteOne({
       type: req.body.type,
       model: req.body.model,
       noOfSteps: req.body.noOfSteps
   }, (err, message)=> {
       if(err) res.status(400).json({"error": 'Failed to delete'})
       else res.status(200).json(message)
   }) 
})

route.delete('/contactor', async(req, res)=> {
   contModel.deleteOne({
       rating: req.body.rating,
       model: req.body.model,
   }, (err, message)=> {
       if(err) res.status(400).json({"error": 'Failed to delete'})
       else res.status(200).json(message)
   }) 
})


route.post('/apfc/:id', async (req, res)=> {
    const id = req.params.id;
    const updatedItem = {
        type:  req.body.type,
        model:  req.body.model,
        noOfSteps: req.body.noOfSteps,
        price:  req.body.price,
        discount:  req.body.discount
    }
    apfcModel.updateOne({"_id": objectId(id)}, {$set: updatedItem}, (err, result)=> { 
        if(err) res.status(400).json({"error": "fields not verified or not updated, TRY AGAIN !!"})
        else res.status(200).json(result)
    })

})

module.exports = route