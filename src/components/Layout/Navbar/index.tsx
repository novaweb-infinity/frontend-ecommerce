"use client"

import Link from "next/link"

import { ShoppingSheet } from "@/components/Sheet/ShoppingSheet"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

const cartItems = 2
const favoriteItems = 2

const products = [
  {
    id: 1,
    name: "Camiseta básica",
    reference: "REF123456",
    color: "bg-white",
    price: "9,99 €",
    image:
      "https://images.unsplash.com/photo-1699503198568-edd9714f3d67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Pantalón vaquero",
    reference: "REF789012",
    color: "bg-blue-400",
    price: "29,99 €",
    image:
      "https://images.unsplash.com/photo-1533825828907-94649041aa67?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function Navbar() {
  return (
    <nav className="z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        <NavLinks />
        <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
          <h1>tutienda.com</h1>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <ShoppingSheet icon="heart" cartItems={cartItems} favoriteItems={favoriteItems} products={products} />
          <ShoppingSheet icon="cart" cartItems={cartItems} favoriteItems={favoriteItems} products={products} />
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
