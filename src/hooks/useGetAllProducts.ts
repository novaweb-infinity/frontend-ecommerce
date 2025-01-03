import { useEffect, useState } from "react"

import { getProducts } from "@/services/getProducts"
import { ApiResponse, Product } from "@/types"

export const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const fetchProducts = async (page: number) => {
    setLoading(true)
    setError(null)
    try {
      const params = {
        pagination: { page, pageSize: 12 },
        populate: "images",
      }
      const response: ApiResponse<Product[]> = await getProducts(params)
      setProducts(response.data)
      setTotalPages(response.meta.pagination.pageCount)
    } catch (error) {
      setError("Error al obtener los productos. Inténtalo más tarde.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts(page)
  }, [page])

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return {
    products,
    loading,
    error,
    page,
    totalPages,
    handleNextPage,
    handlePreviousPage,
  }
}
