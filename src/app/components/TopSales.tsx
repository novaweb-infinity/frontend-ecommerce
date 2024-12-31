"use client"

import { useEffect } from "react"

import { getTopSales } from "@/service/getTopSales"

import ProductCard from "./ProductCard"

const topProducts = [
  { id: 1, name: "Sudadera con Capucha", price: 39.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Pantalones Cargo", price: 59.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Vestido de Noche", price: 89.99, image: "/placeholder.svg?height=300&width=300" },
]

export default function TopSales() {
  useEffect(() => {
    const fetchTopSales = async () => {
      try {
        const products = await getTopSales()
        console.log("Productos recibidos en el componente:", products)
      } catch (err) {
        if (err instanceof Error) {
          console.error("Error al obtener los productos:", err.message)
        } else {
          console.error("Error desconocido al obtener los productos")
        }
      }
    }

    fetchTopSales()
  }, [])

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold">Top Ventas</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
