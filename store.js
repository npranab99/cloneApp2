import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/CartReducer";

export const store = configureStore({
    reducer:{
        CartReducer,
    }
})