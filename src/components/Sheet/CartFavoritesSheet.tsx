"use client"

import { Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { ProductCardSheet } from "./ProductCardSheet"

const cartItems = 3
const favoriteItems = 2

const products = [
  {
    id: 1,
    name: "Camiseta básica",
    reference: "REF123456",
    color: "Negro",
    price: "9,99 €",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Pantalón vaquero",
    reference: "REF789012",
    color: "Azul",
    price: "29,99 €",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function CartFavoritesSheet() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"cart" | "favorites">("cart")

  const handleRemove = (productId: number) => {
    console.log(`Removing product ${productId}`)
    // Aquí iría la lógica para eliminar el producto
  }

  const handleAddToCartOrFavorite = (productId: number) => {
    console.log(`Adding product ${productId} to ${activeTab === "favorites" ? "cart" : "favorites"}`)
    // Aquí iría la lógica para añadir el producto a la cesta o a favoritos
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed right-16 top-4">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Cesta y Favoritos</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
        <div className="space-y-6">
          <div className="flex justify-between">
            <Button variant={activeTab === "cart" ? "default" : "outline"} onClick={() => setActiveTab("cart")}>
              Cesta ({cartItems})
            </Button>
            <Button variant={activeTab === "favorites" ? "default" : "outline"} onClick={() => setActiveTab("favorites")}>
              Favoritos ({favoriteItems})
            </Button>
          </div>
          <div className="space-y-4">
            {products.map((product) => (
              <ProductCardSheet
                key={product.id}
                product={product}
                onRemove={() => handleRemove(product.id)}
                onAddToCartOrFavorite={() => handleAddToCartOrFavorite(product.id)}
                isFavorite={activeTab === "favorites"}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
