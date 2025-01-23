import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { toast } from "@/hooks/use-toast"
import { ProductProps, ProductsStateProps } from "@/types/productProps"

const initialState: ProductsStateProps = {
  items: JSON.parse(sessionStorage.getItem("cart") || "[]"),
}

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductProps>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.items.push(action.payload)
        toast({
          title: "Producto añadio al carrito",
          description: `${action.payload.productName} se añadio al carrito`,
          style: { background: "#00a9a6", color: "#fff" },
        })
      } else {
        toast({
          title: "Producto ya existe",
          description: `${action.payload.productName} ya se encuentra en el carrito`,
          style: { background: "#e66300", color: "#fff" },
        })
      }
      sessionStorage.setItem("cart", JSON.stringify(state.items))
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      toast({
        title: "Producto eliminado",
        description: "Producto eliminado del carrito",
        variant: "destructive",
      })
      sessionStorage.setItem("cart", JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      sessionStorage.setItem("cart", JSON.stringify(state.items))
    },
    setItem: (state, action) => {
      state.items = action.payload
      sessionStorage.setItem("cart", JSON.stringify(state.items))
    },
  },
})

export default cartReducer.reducer
export const { addItem, removeItem, clearCart } = cartReducer.actions
