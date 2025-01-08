"use client"

import { JSX, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getProducts } from "@/api/services/getProducts"
import { ProductListSkeleton } from "@/components/Products/ProductSkeleton"
import ProductsList from "@/components/Products/ProductsList"
import { RootState } from "@/store"
import { setMenProducts } from "@/store/slices/productsSlice"
import { QueryParamsProductProps } from "@/types/queryParamsProductProps"

export default function MenProducts(): JSX.Element {
  const dispatch = useDispatch()
  const menProducts = useSelector((state: RootState) => state.products.menProducts)
  console.log(menProducts)

  useEffect(() => {
    const fetchmenProducts = async () => {
      try {
        const params: QueryParamsProductProps = {
          filters: { productCategory: "Hombre" },
          populate: "images",
        }
        const { data: products } = await getProducts(params)
        dispatch(setMenProducts(products))
      } catch (error) {
        console.error("Error fetching men products:", error)
      }
    }

    if (menProducts.length === 0) {
      fetchmenProducts()
    }
  }, [dispatch, menProducts.length])

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Hombres</h2>
      {menProducts.length === 0 ? <ProductListSkeleton /> : <ProductsList products={menProducts} />}
    </section>
  )
}
