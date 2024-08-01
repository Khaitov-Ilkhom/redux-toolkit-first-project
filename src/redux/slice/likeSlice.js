import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  likedProduct: JSON.parse(localStorage.getItem("likedProduct")) || [],
}
const likeSlice = createSlice({
  name: "likedProduct",
  initialState,
  reducers: {
    addLikedProduct: (state, {payload}) => {
      const likedProducts = state.likedProduct.findIndex(product => product.id === payload.id)
      if (likedProducts === - 1) {
        state.likedProduct.push(payload)
      }
      else{
        state.likedProduct = state.likedProduct.filter(product => product.id !== payload.id)

      }
      localStorage.setItem("likedProduct", JSON.stringify(state.likedProduct))
    },
    removeLikedProduct: (state, {payload}) => {
      state.likedProduct = state.likedProduct.filter(product => product.id !== payload.id)
      localStorage.setItem("likedProduct", JSON.stringify(state.likedProduct))
    }
  }
})

export const {reducer} = likeSlice
export const {addLikedProduct, removeLikedProduct} = likeSlice.actions