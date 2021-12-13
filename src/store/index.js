import { configureStore } from '@reduxjs/toolkit';
import apfcSlice  from './apfcSlice';
import contactorSlice from './contactorSlice';

const store = configureStore({
    reducer: {
        apfcState: apfcSlice.reducer,
        contactorState: contactorSlice.reducer
    }
})

export default store;