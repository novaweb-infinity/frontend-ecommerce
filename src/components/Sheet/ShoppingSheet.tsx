"use client"

import { BaggageClaim, Heart, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

import { ProductCardSheet } from "./ProductCardSheet"

interface ShoppingSheetProps {
  icon: "cart" | "heart"
  cartItems: number
  favoriteItems: number
  products: Array<{
    id: number
    name: string
    reference: string
    color: string
    price: string
    image: string
  }>
}

export function ShoppingSheet({ icon, cartItems, favoriteItems, products }: ShoppingSheetProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"cart" | "favorites">(icon === "cart" ? "cart" : "favorites")

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
        <Button variant="ghost" size="icon" className="relative px-8 py-6">
          {icon === "cart" ? (
            <>
              {cartItems === 0 ? <ShoppingCart className="h-6 w-6" /> : <BaggageClaim className="h-6 w-6" />}
              {cartItems > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-black px-2 py-1 font-bold leading-none text-white">
                  {cartItems}
                </span>
              )}
            </>
          ) : (
            <Heart className="h-6 w-6" />
          )}
          <span className="sr-only">{icon === "cart" ? "Cesta" : "Favoritos"}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-white p-6 sm:w-[400px]">
        <div className="space-y-6">
          <SheetHeader className="flex">
            <div className="mt-8">
              <SheetTitle className="sr-only">
                panel lateral derecho de {activeTab === "cart" ? "la cesta" : "favoritos"}
              </SheetTitle>
              <SheetDescription className="sr-only">
                panel lateral donde aparecen todos los elementos guardados en{" "}
                {activeTab === "cart" ? "la cesta" : "favoritos"}
              </SheetDescription>
            </div>
            <div className="flex justify-between">
              <Button variant={activeTab === "cart" ? "default" : "outline"} onClick={() => setActiveTab("cart")}>
                Cesta ({cartItems})
              </Button>
              <Button
                variant={activeTab === "favorites" ? "default" : "outline"}
                onClick={() => setActiveTab("favorites")}
              >
                Favoritos ({favoriteItems})
              </Button>
            </div>
          </SheetHeader>
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
