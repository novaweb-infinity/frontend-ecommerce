import { isAxiosError } from "axios"
import Cookies from "js-cookie"

import apiClient from "../../apiClient"

export const getUser = async () => {
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
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(
          `Error del servidor (${error.response.status}): ${error.response.data?.message || "Error desconocido"}`
        )
      } else if (error.request) {
        throw new Error("No se recibió respuesta del servidor. Revisa tu conexión e inténtalo más tarde.")
      }
    }
  }
}
