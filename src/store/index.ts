import { configureStore } from "@reduxjs/toolkit"

import productsSlice from "@/store/slices/productsSlice"

// Crear la tienda global
export const store = configureStore({
  reducer: {
    // Combina reducers (puedes agregar más aquí)
    products: productsSlice,
  },
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState> // Tipo para el estado global
export type AppDispatch = typeof store.dispatch // Tipo para el dispatch

export default store
