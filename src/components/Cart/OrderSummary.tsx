"use client"

import { loadStripe } from "@stripe/stripe-js"
import { Package, Truck } from "lucide-react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import apiClient from "@/api/apiClient"
import { Button } from "@/components/ui/button"
import { RootState } from "@/store"
import { clearCart } from "@/store/slices/cartSlice"

export function OrderSummary() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
  const sendPrice = cartPrice > 50 ? "Envío Gratuito" : 4.99
  const totalPrice = cartPrice > 50 ? cartPrice : cartPrice + 4.99

  const dispatch = useDispatch()

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "")

  const handleBuyStripe = async () => {
    try {
      const stripe = await stripePromise
      const response = await apiClient.post("/api/orders", {
        products: cartItems,
      })
      await stripe?.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mt-2 space-y-6 rounded-lg bg-white">
      <h2 className="mb-6 text-lg font-medium">Resumen</h2>
      <div className="space-y-4">
        <div className="space-y-3 rounded-lg bg-blue-50 p-4">
          <div className="flex items-center gap-3 text-blue-600">
            <Package className="h-5 w-5" />
            <span className="font-medium">Envío a {sendPrice} €</span>
          </div>
          <div className="flex items-start gap-3 text-blue-600">
            <Truck className="mt-1 h-5 w-5" />
            <div>
              <div className="font-medium">Envío gratuito en la tienda</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span>
            <span>{cartPrice.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Envío</span>
            <span>{sendPrice} €</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-medium">
            <span>TOTAL</span>
            <span>{totalPrice.toFixed(2)} €</span>
          </div>
        </div>
      </div>
      <Button className="w-full" onClick={handleBuyStripe}>
        Pagar
      </Button>
    </div>
  )
}
