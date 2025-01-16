import axios from "axios"
import { isAxiosError } from "axios"

import apiClient from "@/api/apiClient"
import { UserProps } from "@/types"

export const updateUser = async (params: UserProps) => {
  try {
    const response = await apiClient.put("/api/users/me", {
      params,
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
