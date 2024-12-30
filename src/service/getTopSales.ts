import apiClient from "@/api/apiClient"
import { Product } from "@/store/slices/productsSlice"

export const getTopSales = async () => {
  try {
    const response = await apiClient.get<Product[]>("/products?filters[topVentas][$eq]=true&populate=images")
    console.log("Productos más vendidos:", response.data)
    return response.data
  } catch (error) {
    console.error("Error al obtener los productos más vendidos:", error)
    throw new Error("Error al obtener los productos más vendidos")
  }
}
