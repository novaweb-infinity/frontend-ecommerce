"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { getUserProductsFavorites } from "@/api/services/getUserProductsFavorites"
import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"
import { ProductProps } from "@/types"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const [favorites, setFavorites] = useState<ProductProps[]>([])

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await getUserProductsFavorites()
      setFavorites(response.favorites)
      console.log("Favoritos Ususario:", response.favorites)
    }
    fetchFavorites()
  }, [])

  return (
    <nav className="fixed z-10 w-full bg-white shadow-md">
      <div className="relative flex items-center justify-between px-4 py-4">
        <div className="flex flex-grow">
          <NavLinks />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
            tutienda.com
          </Link>
        </div>

        <div className="flex flex-grow items-center justify-end gap-2">
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favorites} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favorites} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
