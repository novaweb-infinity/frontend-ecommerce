import { JSX } from "react"

import { newArrivalsParams, topSalesParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/getProducts"
import CarouselBanner from "@/components/Home/CarouselBanner"
import Hero from "@/components/Home/Hero"
import NewArrivals from "@/components/Home/NewArrivals"
import TopSales from "@/components/Home/TopSales"
import { ProductProps } from "@/types"

export default async function Home(): Promise<JSX.Element> {
  let newArrivals: ProductProps[] = []
  let topSales: ProductProps[] = []
  let errorMessage: string = ""

  try {
    const [newArrivalsResponse, topSalesResponse] = await Promise.all([getProducts(newArrivalsParams), getProducts(topSalesParams)])

    newArrivals = newArrivalsResponse.data
    topSales = topSalesResponse.data
  } catch (error: unknown) {
    errorMessage = error instanceof Error ? error.message : "Ocurrió un error inesperado."
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Hero />
        <CarouselBanner />
        {errorMessage ? (
          <div className="text-center text-4xl text-red-500">
            <p>{errorMessage}</p>
          </div>
        ) : (
          <>
            <NewArrivals newArrivals={newArrivals} />
            <TopSales topSales={topSales} />
          </>
        )}
      </main>
    </div>
  )
}
