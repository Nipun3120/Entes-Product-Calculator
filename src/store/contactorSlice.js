import { createSlice } from "@reduxjs/toolkit";
import capDutyContactor from '../database/capDutyContactor';

const contactorSlice = createSlice({
    name: 'contactor',
    initialState: {
        items: [{
            rating: '',
            model: '',
            quantity: '',
            price: 0
        }],
        totalAmount: 0,
        totalQuantity: 0,
        discountedAmount: 0
    }, 
    reducers: {
        addContactor(state, action) {
            const newItem = action.payload;
            const selectedProduct = capDutyContactor.find(item=> (item.rating === newItem.rating))

            const existingItem = state.items.find(item => (item.rating === newItem.rating))

            state.totalAmount = parseInt(state.totalAmount) + parseInt(selectedProduct.price*newItem.quantity)
            state.totalQuantity = parseInt(state.totalQuantity) + parseInt(newItem.quantity)
            state.discountedAmount = parseInt(state.discountedAmount) + parseInt(((100-selectedProduct.discount)*(selectedProduct.price*newItem.quantity))/100)

            if(!existingItem) {
                state.items.push({
                    rating: newItem.rating,
                    quantity: parseInt(newItem.quantity),
                    model: selectedProduct.model,
                    price: selectedProduct.price,
                })
            } else {
                existingItem.quantity = parseInt(existingItem.quantity) + parseInt(newItem.quantity)
            }
        },

        decreaseItem(state, action) {
            const product = state.items.find((item, index)=> index === action.payload);
            const selectedProduct = capDutyContactor.find(item=> (item.rating === product.rating))

            state.totalAmount = state.totalAmount - parseInt(product.price)
            state.discountedAmount = state.discountedAmount - parseInt(((100-selectedProduct.discount)*(selectedProduct.price))/100)

            state.totalQuantity--;
            if(product.quantity === 1) {
                state.items = state.items.filter((item, index)=> index !== action.payload)
            } else {
                product.quantity--;
            }
        }
    }
})

export const contactorActions = contactorSlice.actions;
export default contactorSlice;