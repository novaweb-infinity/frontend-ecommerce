import BreadcrumbWithCustomSeparator from "@/components/Cart/BreadcrumbCart"
import CartItems from "@/components/Cart/CartItems"
import { OrderSummary } from "@/components/Cart/OrderSummary"

const items = [
  { label: "Cistell", href: "/cart" },
  { label: "Tramesa", href: "/checkout/shipping" },
  { label: "Pagament", href: "/checkout/payment" },
  { label: "Confirmació", href: "/checkout/confirmation" },
]

export default function CheckoutPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* <div className="h-24"></div> */}
      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div className="">
          <div className="mb-6 flex gap-4">
            <h1 className="text-3xl font-bold">Carrito</h1>
          </div>
          <CartItems />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </section>
  )
}
