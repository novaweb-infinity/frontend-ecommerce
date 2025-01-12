import Cookies from "js-cookie"

import apiClient from "../apiClient"

export const getUserProductsFavorites = async () => {
  try {
    const response = await apiClient.get(`/api/users/me?populate=*`)

    return response.data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error("Ocurrió un error al obtener los productos favoritos. Inténtalo más tarde.")
    }
    throw new Error("Ocurrió un error inesperado. Inténtalo más tarde.")
  }
}
