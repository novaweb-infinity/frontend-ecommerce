"use client"

import { JSX, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getProducts } from "@/api/services/getProducts"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"
import { RootState } from "@/store"
import { setWomenProducts } from "@/store/slices/productsSlice"
import { QueryParamsProductProps } from "@/types/queryParamsProductProps"

export default function WomanProducts(): JSX.Element {
  const dispatch = useDispatch()
  const womenProducts = useSelector((state: RootState) => state.products.womenProducts)
  console.log(womenProducts)

  useEffect(() => {
    const fetchWomenProducts = async () => {
      try {
        const params: QueryParamsProductProps = {
          filters: { productCategory: "Mujer" },
          populate: "images",
        }
        const { data: products } = await getProducts(params)
        dispatch(setWomenProducts(products))
      } catch (error) {
        console.error("Error fetching women products:", error)
      }
    }

    if (womenProducts.length === 0) {
      fetchWomenProducts()
    }
  }, [dispatch, womenProducts.length])

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Mujeres</h2>
      {womenProducts.length === 0 ? <ProductListSkeleton /> : <ProductsList products={womenProducts} />}
    </section>
  )
}
