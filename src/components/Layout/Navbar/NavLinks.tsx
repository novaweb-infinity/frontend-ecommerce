import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()

  const links = [
    { name: "Todos los productos", href: "/products", className: "hidden " },
    { name: "Hombre", href: "/products/men" },
    { name: "Mujer", href: "/products/woman" },
    { name: "Niño", href: "/products/kid" },
  ]

  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 md:flex-nowrap">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`rounded-lg px-4 py-2 font-bold text-black hover:bg-gray-200 ${pathname === link.href ? "bg-gray-300" : ""}`}
          >
            <p className="whitespace-nowrap">{link.name}</p>
          </Link>
        ))}
      </div>
    </>
  )
}
