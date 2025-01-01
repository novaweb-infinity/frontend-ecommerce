// import { useDispatch } from "react-redux"

// import { getProducts } from "@/services/getProducts"
// import { setTopSales } from "@/store/slices/productsSlice"

// export const useGetTopSales = () => {
//   const dispatch = useDispatch()

//   const getTopSales = async () => {
//     const customFilters = {
//       filters: { topVentas: { $eq: true } },
//       populate: "images",
//     }
//     const topSales = await getProducts(customFilters)
//     console.log("Productos más vendidos hook:", topSales)
//     dispatch(setTopSales(topSales))
//   }

//   return { getTopSales }
// }
