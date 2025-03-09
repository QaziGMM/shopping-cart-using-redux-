import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items: [],
    tempitems: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
addtoCart(state, action){
    const existingitem =state.items.find(item=> item.id===action.payload.id);
    if(existingitem){
        existingitem.quantity+=1;
    }else{
        state.items.push({...action.payload, quantity: 1})

    }
    state.tempitems=[...state.items]
    state.totalPrice= state.items.reduce((sum,item)=>sum+ item.price,0);

},
removefromCart(state,action){
state.items=state.items.filter(item=>item.id!==action.payload

);
state.tempitems=[...state.items]
    }}
})
export const{addtoCart, removefromCart} =cartSlice.actions
export default cartSlice.reducer;