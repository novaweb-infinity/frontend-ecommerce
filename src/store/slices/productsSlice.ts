import { createSlice } from "@reduxjs/toolkit"

import { ProductsStateProps } from "@/types/productProps"

const initialState: ProductsStateProps = {
  kidsProducts: [],
  menProducts: [],
  womenProducts: [],
  allProducts: [],
}

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setKidsProducts: (state, action) => {
      state.kidsProducts = action.payload
    },
    setMenProducts: (state, action) => {
      state.menProducts = action.payload
    },
    setWomenProducts: (state, action) => {
      state.womenProducts = action.payload
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
    },
  },
})

export default productReducer.reducer
export const { setKidsProducts, setMenProducts, setWomenProducts, setAllProducts } = productReducer.actions
