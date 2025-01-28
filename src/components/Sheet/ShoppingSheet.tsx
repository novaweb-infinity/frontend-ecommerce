"use client"

import { BaggageClaim, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { toogleFavorite } from "@/api/services/user/toogleFavorite"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { removeItem } from "@/store/slices/cartSlice"
import { removeFavorite } from "@/store/slices/userSlice"
import { ProductProps } from "@/types"

import { ProductCardSheet } from "./ProductCardSheet"

interface ShoppingSheetProps {
  icon: "cart" | "heart"
  cartItems: ProductProps[]
  favoriteItems: ProductProps[]
}

export function ShoppingSheet({ icon, cartItems, favoriteItems }: ShoppingSheetProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"cart" | "favorites">(icon === "cart" ? "cart" : "favorites")

  const dispatch = useDispatch()

  useEffect(() => {
    if (open && icon === "heart") {
      setActiveTab("favorites")
    } else if (open && icon === "cart") {
      setActiveTab("cart")
    }
  }, [open, icon])

  const handleRemove = async (productId: number) => {
    console.log(`Removing product ${productId} from cart`)

    if (activeTab === "cart") {
      dispatch(removeItem(productId))
    } else if (activeTab === "favorites") {
      dispatch(removeFavorite(productId))
      await toogleFavorite(productId)
    }
  }

  const handleAddToCartOrFavorite = (productId: number) => {
    console.log(`Adding product ${productId} to ${activeTab === "favorites" ? "cart" : "favorites"}`)
    // Aquí iría la lógica para añadir el producto a la cesta o a favoritos
  }

  const itemsToRender = activeTab === "cart" ? cartItems : favoriteItems

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative px-8 py-6 dark:hover:bg-gray-100">
          {icon === "cart" ? (
            <>
              {cartItems.length === 0 ? (
                <ShoppingCart className="h-6 w-6 dark:text-black" />
              ) : (
                <BaggageClaim className="h-6 w-6 dark:text-black" />
              )}
              {cartItems.length > 0 && (
                <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-black px-2 py-1 font-bold leading-none text-white">
                  {cartItems.length}
                </span>
              )}
            </>
          ) : (
            <>
              {favoriteItems?.length > 0 ? (
                <div>
                  <Heart className="h-6 w-6 fill-red-500 dark:text-black" />
                  <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-black px-2 py-1 font-bold leading-none text-white">
                    {favoriteItems.length}
                  </span>
                </div>
              ) : (
                <Heart className="h-6 w-6 dark:text-black" />
              )}
            </>
          )}
          <span className="sr-only">{icon === "cart" ? "Cesta" : "Favoritos"}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col justify-between bg-white p-6 sm:w-[400px]">
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
                Cesta ({cartItems.length})
              </Button>
              <Button
                variant={activeTab === "favorites" ? "default" : "outline"}
                onClick={() => setActiveTab("favorites")}
              >
                Favoritos ({favoriteItems?.length})
              </Button>
            </div>
          </SheetHeader>
          <div className="space-y-4">
            {itemsToRender?.map((product) => (
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
        {/* Botón adicional solo para la pestaña de "cart" */}
        {activeTab === "cart" && cartItems.length > 0 && (
          <div className="mb-4 border-t border-gray-200 pt-4">
            <Link href="/cart" passHref>
              <Button
                variant="default"
                size="lg"
                className="w-full"
                onClick={() => {
                  setOpen(false)
                }}
              >
                Ir al carrito
              </Button>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
