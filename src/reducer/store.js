import { configureStore } from "@reduxjs/toolkit";
import slice from './AmazonSlice'

export const store = configureStore({
    reducer :{
        header : slice,
    }
})