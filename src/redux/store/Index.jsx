import {configureStore} from "@reduxjs/toolkit";
import {reducer as cartReducer} from "../slice/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default store