import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { name: "Hombre", href: "/men" },
    { name: "Mujer", href: "/woman" },
    { name: "Niños", href: "/kid" },
    { name: "Todos los productos", href: "/all-products" },
  ]

  return (
    <>
      <div className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex space-x-4 rounded-lg p-2 font-bold text-black hover:bg-gray-200 ${pathname === link.href ? "bg-gray-300" : ""}`}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
