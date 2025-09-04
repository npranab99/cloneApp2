import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

const cartReducer = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            const item = state.items.find((i)=> i.id===action.payload.id);
            if(item){
                item.quantity +=1;
            }else{
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action)=>{
            const index =  state.items.findIndex((i)=> i.id === action.payload);
            if(index>0){
                state.items[index].quantity -= 1;
                if(state.items[index].quantity === 0 ){
                    state.items.splice(index, 1);
                }
            }
        },
        clearCart: (state)=>{
            state.items = [];
        },
    }

});

export const {addToCart, removeFromCart, clearCart}= cartReducer.actions;
export default createSlice.cartReducer;