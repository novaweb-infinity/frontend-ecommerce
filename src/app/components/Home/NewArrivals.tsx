"use client"

import { NewArrivalsProps } from "@/types"

import ProductCard from "./ProductCard"

export default function NewArrivals({ newArrivals }: NewArrivalsProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Novedades</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
