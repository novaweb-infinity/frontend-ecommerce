import apiClient from "@/api/apiClient"
import { ApiResponse, Product } from "@/types"
import { QueryParamsProps } from "@/types/queryParamsProduct"

export const getProducts = async (params: QueryParamsProps): Promise<Product[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Product[]>>("/api/products", {
      params,
    })

    return response.data.data
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al obtener los productos:", error.message)
    } else {
      console.error("Error desconocido al obtener los productos")
    }

    throw new Error("Error al obtener los productos. Inténtalo más tarde.")
  }
}
