import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/help">Ayuda</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
              <li>
                <Link href="/terms">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="/privacy">Política de privacidad</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/men">Hombre</Link>
              </li>
              <li>
                <Link href="/women">Mujer</Link>
              </li>
              <li>
                <Link href="/kids">Niños</Link>
              </li>
              <li>
                <Link href="/accessories">Accesorios</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Twitter />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Tu Tienda de Ropa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
