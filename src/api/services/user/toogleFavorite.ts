import { isAxiosError } from "axios"
import Cookies from "js-cookie"

import apiClient from "@/api/apiClient"
import { ProductProps } from "@/types"

export const toogleFavorite = async (productId: number | undefined) => {
  const userId = Cookies.get("userId")

  try {
    const response = await apiClient.get(`/api/users/${userId}`, {
      params: {
        populate: "favorites",
      },
    })

    if (!userId) {
      throw new Error("No se ha podido obtener el usuario. Inicia sesión e inténtalo de nuevo.")
    }

    const favorites = response.data.favorites || []

    const favoriteIndex = favorites.findIndex((favorite: ProductProps) => favorite.id === productId)
    if (favoriteIndex === -1) {
      favorites.push({ id: productId })
    } else {
      favorites.splice(favoriteIndex, 1)
    }

    const updateFavoritesResponse = await apiClient.put(`/api/users/${userId}`, {
      favorites,
    })

    return updateFavoritesResponse.data.favorites
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error del servidor (${error.response.status}): ${error.response.data?.message || "Error desconocido"}`
        )
      } else if (error.request) {
        throw new Error("No se recibió respuesta del servidor. Revisa tu conexión e inténtalo más tarde.")
      }
    }
    throw new Error("Ocurrió un error inesperado. Inténtalo más tarde.")
  }
}
