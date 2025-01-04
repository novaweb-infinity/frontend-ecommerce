import apiClient from "@/api/apiClient"
import { ApiResponseProps, Product } from "@/types"
import { QueryParamsProductProps } from "@/types/queryParamsProductProps"

export const getProducts = async (params: QueryParamsProductProps): Promise<ApiResponseProps> => {
  try {
    const response = await apiClient.get<ApiResponseProps>("/api/products", {
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
