import {configureStore} from "@reduxjs/toolkit";
import {reducer as cartReducer} from "../slice/cartSlice.js";
import {reducer as likedReducer} from "../slice/likeSlice.js"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likedReducer,
  }
})

export default store