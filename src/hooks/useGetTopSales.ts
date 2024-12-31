import { useDispatch } from "react-redux"

import { getProducts } from "@/services/getProducts"
import { setTopSales } from "@/store/slices/productsSlice"

export const useGetTopSales = () => {
  const dispatch = useDispatch()

  const getTopSales = async () => {
    const filters = { topVentas: { $eq: true } }
    const topSales = await getProducts(filters)
    console.log("Productos más vendidos hook:", topSales)
    dispatch(setTopSales(topSales))
  }

  return { getTopSales }
}
