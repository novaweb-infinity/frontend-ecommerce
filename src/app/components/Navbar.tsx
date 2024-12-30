"use client"

import { Heart, ShoppingCart, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import ToggleTheme from "./Toggle-Theme"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
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
        </div>
        <div className="flex items-center space-x-2">
          <Link className="rounded-lg px-4 py-2 hover:bg-gray-100" href="/cart">
            <Heart size={28} className="dark:text-black" />
          </Link>
          <Link className="rounded-lg px-4 py-2 hover:bg-gray-100" href="/cart">
            <ShoppingCart size={28} className="dark:text-black" />
          </Link>
          <Link className="rounded-lg px-4 py-2 hover:bg-gray-100" href="/account">
            <User size={28} className="dark:text-black" />
          </Link>

          <ToggleTheme />
        </div>
      </div>
    </nav>
  )
}
