import { isAxiosError } from "axios"

import apiClient from "@/api/apiClient"
import { ApiResponseProps } from "@/types"
import { QueryParamsProductProps } from "@/types/queryParamsProductProps"

export const getProducts = async (params: QueryParamsProductProps): Promise<ApiResponseProps> => {
  try {
    const response = await apiClient.get<ApiResponseProps>("/api/products", {
      params,
    })

    return response.data
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response) {
        throw new Error(`Error del servidor (${error.response.status}): ${error.response.data?.message || "Error desconocido"}`)
      } else if (error.request) {
        throw new Error("No se recibió respuesta del servidor. Revisa tu conexión e inténtalo más tarde.")
      }
    }
    throw new Error("Ocurrió un error inesperado. Inténtalo más tarde.")
  }
}
