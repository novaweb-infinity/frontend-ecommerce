import Link from "next/link"

export default function QuickLinks() {
  return (
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
  )
}
