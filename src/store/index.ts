import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "@/store/slices/cartSlice"
import userReducer from "@/store/slices/userSlice"

// Crear la tienda global
export const store = configureStore({
  reducer: {
    // Combina reducers (puedes agregar más aquí)
    cart: cartReducer,
    user: userReducer,
  },
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState> // Tipo para el estado global
export type AppDispatch = typeof store.dispatch // Tipo para el dispatch

export default store
