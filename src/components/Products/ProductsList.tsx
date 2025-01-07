"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { AppDispatch, RootState } from "@/store"
import { fetchProducts } from "@/store/slices/productsSlice"
import { ProductProps } from "@/types"

import ProductsGrid from "./ProductsGrid"

export default function ProductsList() {
  const dispatch = useDispatch<AppDispatch>()
  const allProducts = useSelector((state: RootState) => state.products.products)

  const pathName = usePathname()

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, allProducts.length])

  let products: ProductProps[] = []

  if (pathName.includes("/kid")) {
    products = allProducts.filter((product) => product.productCategory === "Niño")
  } else if (pathName.includes("/men")) {
    products = allProducts.filter((product) => product.productCategory === "Hombre")
  } else if (pathName.includes("/woman")) {
    products = allProducts.filter((product) => product.productCategory === "Mujer")
  } else {
    products = allProducts
  }

  return (
    <>
      <ProductsGrid products={products} />
    </>
  )
}
