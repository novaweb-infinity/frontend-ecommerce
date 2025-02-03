import Link from "next/link"

export default function Categories() {
  return (
    <div>
      <h3 className="mb-4 text-xl font-bold">Categorías</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/products/men">Hombre</Link>
        </li>
        <li>
          <Link href="/products/woman">Mujer</Link>
        </li>
        <li>
          <Link href="/products/kid">Niño</Link>
        </li>
        <li>
          <Link href="/products">Todos los productos</Link>
        </li>
      </ul>
    </div>
  )
}
