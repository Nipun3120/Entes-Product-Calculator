import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

var apfcData = [];
const getApfcData = async()=> {
    const res = await axios({
        method:'GET',
        url:'http://localhost:3120/products/apfc'
    });
    const data = await res.data
    data.map(item=> apfcData.push(item))
}

getApfcData();

const apfcSlice = createSlice({
    name: 'apfc',
    initialState: {
        items: [{
                type: '',
                quantity: '',
                noOfSteps: '',
                model: '',
                price: 0
        }],
        itemsCount: 0,
        totalAmount: 0,
        totalSteps: 0,
        discountedAmount: 0
    },
    reducers: {
        addApfc(state, action) {
            const newItem = action.payload

            // getting product from list
            const selectedProduct = apfcData.find(item=> (item.type === newItem.type && item.noOfSteps === newItem.noOfSteps))
            
            // chek for the current item i.e. is it already in the cart 
            // if yes then update quantity and price, 
            // if no then add to cart and update quantity, price and count
            const existingItem = state.items.find(item => (item.type === newItem.type && item.noOfSteps === newItem.noOfSteps))
            
            // updating count
            state.itemsCount = parseInt(state.itemsCount) + parseInt(newItem.quantity)            
            
            // updating amount
            state.totalAmount = parseInt(state.totalAmount) + parseInt(selectedProduct.price*newItem.quantity)
            state.totalSteps = parseInt(state.totalSteps) + parseInt(newItem.noOfSteps*newItem.quantity);
            state.discountedAmount = parseInt(state.discountedAmount) + parseInt(((100-selectedProduct.discount)*(selectedProduct.price*newItem.quantity))/100)
            
            if(!existingItem) {
                state.items.push({
                    type: newItem.type,
                    noOfSteps: newItem.noOfSteps,
                    quantity: parseInt(newItem.quantity),
                    model: selectedProduct.model,
                    price: selectedProduct.price
                })

            } else {
                existingItem.quantity = parseInt(existingItem.quantity) + parseInt(newItem.quantity)

            }
        },
        decreaseItem(state, action) {
            // geting item
            const product = state.items.find((item, index)=> index === action.payload);
            const selectedProduct = apfcData.find(item=> (item.type === product.type && item.noOfSteps === product.noOfSteps))

            // decresign count by 1
            state.itemsCount--;

            // upadating amount
            state.totalAmount = state.totalAmount - (selectedProduct.price)
            // console.log('disc: ', parseInt(((100-selectedProduct.discount)/100)*selectedProduct.price) )
            // console.log('disc: ', ((100-selectedProduct.discount)/100)*selectedProduct.price) 

            
            state.discountedAmount = state.discountedAmount - parseInt((100-selectedProduct.discount)*selectedProduct.price/100)

            // console.log('hi', parseInt(((100-selectedProduct.discount)*(selectedProduct.price))/100), state.discountedAmount)
            if(product.quantity === 1){
                state.items = state.items.filter((item, index)=> index !== action.payload)
            } else {
                product.quantity--;
            }
        },
        reset(state, action) {
            state.items = state.items.filter(item=> 1 === 2)
            state.discountedAmount = 0;
            state.itemsCount = 0;
            state.totalAmount = 0;
            state.totalSteps = 0;
        }
    }
})

export const apfcActions = apfcSlice.actions;
export default apfcSlice;
