import { createSlice } from "@reduxjs/toolkit";
import apfcList from "../database/apfcList";

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
        totalSteps: 0
    },
    reducers: {
        addApfc(state, action) {
            const newItem = action.payload

            // getting product from list
            const selectedProduct = apfcList.find(item=> (item.type === newItem.type && item.noOfSteps === newItem.noOfSteps))
            
            // chek for the current item i.e. is it already in the cart 
            // if yes then update quantity and price, 
            // if no then add to cart and update quantity, price and count
            const existingItem = state.items.find(item => (item.type === newItem.type && item.noOfSteps === newItem.noOfSteps))
            
            // updating count
            state.itemsCount = parseInt(state.itemsCount) + parseInt(newItem.quantity)            
            // updating amount
            state.totalAmount = parseInt(state.totalAmount) + parseInt(selectedProduct.price*newItem.quantity)
            state.totalSteps = parseInt(state.totalSteps) + parseInt(newItem.noOfSteps);

            if(!existingItem) {
                // state.itemsCount++;
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
            // get item
    
            const product = state.items.find((item, index)=> index === action.payload);
            const selectedProduct = apfcList.find(item=> (item.type === product.type && item.noOfSteps === product.noOfSteps))

            state.itemsCount--;
            state.totalAmount = state.totalAmount - (selectedProduct.price)

            if(product.quantity === 1){
                state.items = state.items.filter((item, index)=> index !== action.payload)
            } else {
                product.quantity--;
            }
        }
    }
})

export const apfcActions = apfcSlice.actions;
export default apfcSlice;
