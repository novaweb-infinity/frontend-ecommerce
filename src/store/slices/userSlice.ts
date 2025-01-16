import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { UserProps } from "@/types"

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
  },
})

export default userReducer.reducer
export const { setUser, clearUser } = userReducer.actions
