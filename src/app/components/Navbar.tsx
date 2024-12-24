"use client"

import { ShoppingCart, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex space-x-4">
          <Button variant="ghost">Hombre</Button>
          <Button variant="ghost">Mujer</Button>
          <Button variant="ghost">Niños</Button>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Link href="/account">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
