import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { clear } from "console"

import apiClient from "@/api/apiClient"
import { ProductProps } from "@/types"

interface UserState {
  user: {
    documentId: string
    username: string
    email: string
    provider: string
    confirmed: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    favorites: ProductProps[]
  }
}
const initialState = {
  user: {
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

const getUser = createAsyncThunk("/api/users/me", async () => {
  try {
    const response = await apiClient.get("/api/users/me", {
      params: {
        populate: {
          favorites: {
            populate: "images",
          },
        },
      },
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Ocurrió un error al obtener los productos favoritos. Inténtalo más tarde.")
    }
    throw new Error("Ocurrió un error inesperado. Inténtalo más tarde.")
  }
})

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = {
        documentId: "",
        username: "",
        email: "",
        provider: "",
        confirmed: false,
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        favorites: [],
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload
    })
  },
})

export default userReducer.reducer
export const { clearUser } = userReducer.actions
export { getUser }
