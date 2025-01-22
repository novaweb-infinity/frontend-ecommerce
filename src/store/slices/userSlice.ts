import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ProductProps, UserProps } from "@/types"

const initialState: UserProps = {
  profile: {
    documentId: "",
    username: "",
    email: "",
    provider: "",
    confirmed: false,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    favorites: [],
  },
}

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps["profile"]>) => {
      state.profile = action.payload
      state.profile.favorites = action.payload.favorites
    },
    clearUser: (state) => {
      state.profile = initialState.profile
    },
    addFavorite: (state, action: PayloadAction<ProductProps>) => {
      if (!state.profile.favorites.some((favorite) => favorite.id === action.payload.id)) {
        state.profile.favorites.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<number | undefined>) => {
      state.profile.favorites = state.profile.favorites.filter((favorite) => favorite.id !== action.payload)
    },
  },
})

export default userReducer.reducer
export const { setUser, clearUser, addFavorite, removeFavorite } = userReducer.actions
