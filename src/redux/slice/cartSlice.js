import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const checkProductAlreadyExist = state.products.findIndex(product => product.id === payload.id);
      if(checkProductAlreadyExist === -1){
        state.products.push(payload)
      }
      else{
        state.products = state.products.map(product => {
          if(product.id === payload.id){
            product.quantity = product.quantity + payload.quantity
          }
          return product
        })
      }
      localStorage.setItem("cart", JSON.stringify(state.products))
    },
    removeFromCart: (state, {payload}) => {
      if(payload.quantity){
        state.products = state.products.map(product => {
          if(product.id === payload.id){
            product.quantity = product.quantity - 1
          }
          return product
        })
      }
      else{
        state.products = state.products.filter(product => product.id !== payload.id)
      }
      localStorage.setItem("cart", JSON.stringify(state.products))
    }
  }
})

export const {reducer} = cartSlice
export const {addToCart, removeFromCart} = cartSlice.actions