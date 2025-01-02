import Categories from "./Categories"
import QuickLinks from "./QuickLinks"
import SocialMedia from "./SocialMedia"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:justify-items-center">
          <QuickLinks />
          <Categories />
          <SocialMedia />
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Tu Tienda de Ropa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
