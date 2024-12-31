import { useDispatch } from "react-redux"

import { getProducts } from "@/services/getProducts"
import { setNewArrivals } from "@/store/slices/productsSlice"

export const useGetNewArrivals = () => {
  const dispatch = useDispatch()
  const getNewArrivals = async () => {
    const customFilters = {
      sort: ["createdAt:desc"],
      pagination: {
        limit: 5,
      },
      populate: "images",
    }
    const newArrivals = await getProducts(customFilters)
    console.log("Novedades hook:", newArrivals)
    dispatch(setNewArrivals(newArrivals))
  }
  return { getNewArrivals }
}
