"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"
import { RootState } from "@/store"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    const tokenString = sessionStorage.getItem("supabase.auth.token")

    if (tokenString) {
      try {
        const token = JSON.parse(tokenString)
        setEmail(token.user.email)
      } catch (error) {
        console.error("Error parsing token:", error)
      }
    }
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
          {email && <p>{email}</p>}
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={cartItems.length} />
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={cartItems.length} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
