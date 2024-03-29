import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import LoggedSlice from "./Slices/LoggedSlice";

export const Store = configureStore({
    reducer:{
        cart :CartSlice,
        loggedin : LoggedSlice

    }
})