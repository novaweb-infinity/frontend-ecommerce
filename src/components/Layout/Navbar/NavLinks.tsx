import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { name: "Hombre", href: "/products/men" },
    { name: "Mujer", href: "/products/woman" },
    { name: "Niños", href: "/products/kid" },
    { name: "Todos los productos", href: "/products" },
  ]

  return (
    <>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex rounded-lg px-4 py-2 font-bold text-black hover:bg-gray-200 ${pathname === link.href ? "bg-gray-300" : ""}`}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
