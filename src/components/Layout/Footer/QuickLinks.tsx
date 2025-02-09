"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export default function QuickLinks() {
  const router = useRouter()

  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Enlaces rápidos</h3>
      <ul className="space-y-2">
        <li>
          <a href="/about">Sobre nosotros</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
        <li>
          <a href="/help">Ayuda</a>
        </li>
        <li>
          <a href="/privacy">Política de privacidad</a>
        </li>
        <li>
          <a href="/terms&conditions">Términos y condiciones</a>
        </li>
      </ul>
    </div>
  )
}
