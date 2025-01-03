"use client"

import { Button } from "@/components/ui/button"
import { useGetAllProducts } from "@/hooks/useGetAllProducts"

import ProductCard from "../components/ProductCard"
import ProductSkeleton from "./ProductSkeleton"

export default function AllProducts() {
  const { products, loading, error, page, totalPages, handleNextPage, handlePreviousPage } = useGetAllProducts()

  if (error) {
    return <div>{error}</div>
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Todos los productos</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <div className="mt-6 flex justify-between">
        <Button onClick={handlePreviousPage} disabled={page === 1 || loading} variant="outline">
          Anterior
        </Button>
        <Button onClick={handleNextPage} disabled={page === totalPages || loading} variant="outline">
          Siguiente
        </Button>
      </div>
    </section>
  )
}
