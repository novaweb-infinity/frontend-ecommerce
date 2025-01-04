import apiClient from "@/api/apiClient"
import { ApiResponse } from "@/types"
import { QueryParamsProps } from "@/types/queryParamsProduct"

export const getProducts = async (params: QueryParamsProps): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get<ApiResponse>("/api/products", {
      params,
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error("Error al obtener los productos. Inténtalo más tarde.")
    }
  }
}
