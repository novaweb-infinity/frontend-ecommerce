import ProductCard from "./ProductCard"

const newProducts = [
  { id: 1, name: "Camiseta Básica", price: 19.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Jeans Slim Fit", price: 49.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Zapatillas Deportivas", price: 79.99, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Chaqueta de Cuero", price: 129.99, image: "/placeholder.svg?height=300&width=300" },
]

export default function NewArrivals() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold">Novedades</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
