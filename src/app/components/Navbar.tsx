"use client"

import { Heart, ShoppingCart, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import Login from "./Auth/Login"
import ToggleTheme from "./ToggleTheme"

export default function Navbar() {
  return (
    <nav className="z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex space-x-4 dark:text-black">
          <Button className="text-lg" variant="ghost">
            Hombre
          </Button>
          <Button className="text-lg" variant="ghost">
            Mujer
          </Button>
          <Button className="text-lg" variant="ghost">
            Niños
          </Button>
          <Link href="/all-products">
            <Button className="text-lg" variant="ghost">
              Todos los productos
            </Button>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link className="rounded-lg px-5 py-2 hover:bg-gray-100" href="/cart">
            <Heart size={28} className="dark:text-black" />
          </Link>
          <Link className="rounded-lg px-5 py-2 hover:bg-gray-100" href="/cart">
            <ShoppingCart size={28} className="dark:text-black" />
          </Link>
          <Login />
          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
