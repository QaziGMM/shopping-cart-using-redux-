import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../shopingCart/productSlice'
import cartReducer from '../shopingCart/cartSlice';

const store = configureStore({
    reducer:{
        products:productReducer,
        cart: cartReducer
    }
})

export default store;