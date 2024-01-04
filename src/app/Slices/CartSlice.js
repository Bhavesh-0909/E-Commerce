import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState : [],
    reducers :{
        addToCart: (state, actions)=>{
            state.push(actions.payload);
        },
        removeFromCart : (state, actions)=>{
            state.filter((post)=> post.id !== actions.payload);
        }
    }
});

export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;