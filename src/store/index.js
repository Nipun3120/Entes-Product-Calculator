import { configureStore } from '@reduxjs/toolkit';
import apfcSlice  from './apfcSlice';

const store = configureStore({
    reducer: {
        apfcState: apfcSlice.reducer,
    }
})

export default store;