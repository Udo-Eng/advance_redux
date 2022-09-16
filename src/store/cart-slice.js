import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: { 
      items: [],
      totalQuantity: 0,
      changed: false
  },
  reducers: {
    replaceCart(state,action){
        state.items = action.payload.items;
        state.totalQuantity = action.payload.totalQuantity;
    },
    addCartItem(state,action) {
       let newItem = action.payload;
       let existingItem = state.items.find(item => item.id === newItem.id);
       state.totalQuantity++;
       state.changed = true;
       if (!existingItem) {
         state.items.push({
            id : newItem.id,
           price: newItem.price,
           quantity: 1,
           totalprice: newItem.price,
           name: newItem.title,
         });
       } else {
           existingItem.quantity+= 1;
           existingItem.totalprice += newItem.price; 
       }
    },
    removeCartItem(state,action){
         let id = action.payload;
         state.totalQuantity--;
         state.changed = true;
         let existingItem = state.items.find((item) => item.id === id );

         if(existingItem.quantity === 1){
             state.items = state.items.filter(item => item.id !== id);
         }else{
              existingItem.quantity -= 1;
              existingItem.totalprice -= existingItem.price;  
         }
    }
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
