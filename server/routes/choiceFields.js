const express = require('express');
const fields = require('../models/choiceFields');
const { category1Ct, category3Ct, kvarRating } = fields;

const route = express.Router();

route.get('/category-1ct-steps', async (req, res)=>{
    category1Ct.find({}, (err, category)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(category)
    })
})
route.get('/category-3ct-steps', async (req, res)=>{
    category3Ct.find({}, (err, products)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(products)
    })
})
route.get('/kvar-rating', async (req, res)=>{
    kvarRating.find({}, (err, products)=> {
        if(err) res.status(400).json({'error': 'failed to fetch objects from database'})
        else res.status(200).json(products)
    })
})


route.post('/category-1ct-steps', async (req, res)=> {
    const cat_1ct_steps = new category1Ct({
        category: req.body.category
    })

    try{
        const dbResponse = await cat_1ct_steps.save();
        console.log(dbResponse)
        res.status(201).json({'message': 'object created successfully'})
    } catch (error) {
        res.status(400).json({'error': error}).send('object insertion failed')
    }
    
})
route.post('/category-3ct-steps', async (req, res)=> {
    const cat_3ct_steps = new category3Ct({
        category: req.body.category
    })

    try{
        const dbResponse = await cat_3ct_steps.save();
        console.log(dbResponse)
        res.status(201).json({'message': 'object created successfully'})
    } catch (error) {
        res.status(400).json({'error': error}).send('object insertion failed')
    }
    
})
route.post('/kvar-rating', async (req, res)=> {
    const kvarRatingObj = new kvarRating({
        rating: req.body.rating
    })

    try{
        const dbResponse = await kvarRatingObj.save();
        console.log(dbResponse)
        res.status(201).json({'message': 'object created successfully'})
    } catch (error) {
        res.status(400).json({'error': error}).send('object insertion failed')
    }
    
})


module.exports = route
