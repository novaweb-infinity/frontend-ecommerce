"use client"

import { TopSalesProps } from "@/types"

import ProductCard from "./ProductCard"

export default function TopSales({ topSales }: TopSalesProps) {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Top Ventas</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {topSales.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
