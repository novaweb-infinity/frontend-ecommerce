"use client"

import { useSelector } from "react-redux"

import { RootState } from "@/store"

import ProductCardCart from "./ProductCardCart"

export default function CartItems() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <div className="grid gap-4">
      {cartItems.map((product) => (
        <ProductCardCart
          key={product.id}
          product={product}
          onRemove={() => console.log("Removing product")}
          onAddToCartOrFavorite={() => console.log("Adding product to cart or favorites")}
          isFavorite={false}
        />
      ))}
    </div>
  )
}
