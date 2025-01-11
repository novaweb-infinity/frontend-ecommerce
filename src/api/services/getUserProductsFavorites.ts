import { ProductProps } from "@/types"

import apiClient from "../apiClient"

export const getUserProductsFavorites = async (): Promise<ProductProps[]> => {
  try {
    const tokenString = sessionStorage.getItem("supabase.auth.token")

    if (!tokenString) {
      throw new Error("No hay una sesión activa o el token no está disponible.")
    }

    const parsedToken = JSON.parse(tokenString)
    const userId = parsedToken.user.id

    const response = await apiClient.get("/api/custom-users", {
      params: {
        "filters[supabaseUserId][$eq]": userId,
        populate: {
          favorite: {
            populate: "images",
          },
        },
      },
    })

    const userData = response.data.data?.[0]
    const favorites = userData?.favorite || []
    return favorites
  } catch (error) {
    console.error("Error al obtener favoritos:", error)
    throw new Error("Error al obtener favoritos.")
  }
}
