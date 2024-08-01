import {createSlice} from "@reduxjs/toolkit";
import saveToLocalStorage from "../../utils/LocalStorage.jsx";

const initialState = {
  products: JSON.parse(localStorage.getItem("cart")) || [],
  count: localStorage.getItem("count") || 1
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.products.findIndex(product => product.id === action.payload.id) === -1) {
        state.products.push(action.payload)
      }
      saveToLocalStorage("cart", state.products)
    },
    countIncrement: (state, action) => {
      state.count = state.count + action.payload.quantity
      localStorage.setItem("count", state.count)
    },
    countDecrement: (state, action) => {
      if (state.count > 0) {
        state.count = state.count - action.payload.quantity
      }
      localStorage.setItem("count", state.count)
    },
    removeFromCart: (state, action) => {
      state.products.filter(product => product.id !== action.payload.product.id)
      saveToLocalStorage("cart", state.products)
    }
  }
})

export const {reducer} = cartSlice
export const {addToCart, removeFromCart, countIncrement, countDecrement} = cartSlice.actions