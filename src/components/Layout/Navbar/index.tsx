"use client"

import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"

import Login from "../../Auth/Login"
import NavLinks from "./NavLinks"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  return (
    <nav className="z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        <NavLinks />
        <Link href="/" className="rounded-lg px-4 py-2 text-2xl font-bold text-black hover:bg-gray-200">
          <h1>tutienda.com</h1>
        </Link>
        <div className="flex items-center space-x-2">
          <Link className="rounded-lg px-5 py-2 text-black hover:bg-gray-100" href="/cart">
            <Heart size={28} className="dark:text-black" />
          </Link>
          <Link className="rounded-lg px-5 py-2 text-black hover:bg-gray-100" href="/cart">
            <ShoppingCart size={28} className="dark:text-black" />
          </Link>
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
