import Link from "next/link"

export default function Categories() {
  return (
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
  )
}
