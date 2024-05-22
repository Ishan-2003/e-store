import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './cartSlice';
import productReducer from './productSlice';


const store = configureStore({
    reducer:{
        cart : cartreducer,
        product : productReducer
    },
});

export default store;