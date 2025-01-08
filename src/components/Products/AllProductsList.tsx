"use client"

import { Metadata } from "next"
import { MetadataContext } from "next/dist/lib/metadata/types/resolvers"

import { ApiResponseProps, ProductProps } from "@/types"

import PaginationControls from "./PaginationController"
import ProductsGrid from "./ProductsGrid"

interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
export default function AllProductsList({
  currentPage,
  pageSize,
  products,
  totalPages,
  meta,
}: {
  currentPage: number
  pageSize: number
  products: ProductProps[]
  totalPages: number
  meta: Meta 
}) {
  return (
    <>
      <ProductsGrid products={products} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={meta.pagination.total}
        pageSize={pageSize}
      />
    </>
  )
}
