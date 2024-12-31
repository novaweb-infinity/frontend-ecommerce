import apiClient from "@/api/apiClient"
import { ApiResponse, Product } from "@/types"

export const getProducts = async (filters: Record<string, any>): Promise<Product[]> => {
  try {
    const response = await apiClient.get<ApiResponse<Product[]>>("/products", {
      params: {
        filters,
        populate: "images",
      },
    })
    console.log("Respuesta de la API:", response)

    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error("Hubo un problema al obtener los productos. Inténtalo más tarde.")
    }
    console.log("Productos recibidos en el servicio:", response.data)
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
