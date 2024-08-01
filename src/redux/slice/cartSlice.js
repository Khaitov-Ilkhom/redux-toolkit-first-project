import {createSlice} from "@reduxjs/toolkit";
import saveToLocalStorage from "../../utils/LocalStorage.jsx";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action)
      if (state.products.findIndex(product => product.id === action.payload.id) === -1) {
        state.products.push(action.payload)
      }
      saveToLocalStorage("cart", state.products)
    }
  }
})

export const {reducer} = cartSlice
export const {addToCart, removeFromCart} = cartSlice.actions