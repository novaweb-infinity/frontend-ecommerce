"use client"

import Link from "next/link"
import { useSelector } from "react-redux"

import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <nav className="fixed z-10 w-full bg-white shadow-md">
      <div className="relative flex items-center justify-between px-4 py-4">
        <NavLinks />

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
            tutienda.com
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={cartItems.length} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={cartItems.length} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
