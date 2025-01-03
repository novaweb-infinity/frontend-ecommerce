import { getProducts } from "@/services/getProducts"
import { QueryParamsProps } from "@/types/"

import CarouselBanner from "./components/CarouselBanner"
import Hero from "./components/Hero"
import NewArrivals from "./components/NewArrivals"
import TopSales from "./components/TopSales"

export default async function Home() {
  const newArrivalsParams = {
    filters: {
      isFeature: { $eq: true },
    },
    pagination: {
      limit: 8,
    },
    populate: "images",
  } as QueryParamsProps

  const topSalesParams = {
    filters: {
      topVentas: { $eq: true },
    },
    pagination: {
      limit: 3,
    },
    populate: "images",
  } as QueryParamsProps

  const [newArrivalsResponse, topSalesResponse] = await Promise.all([getProducts(newArrivalsParams), getProducts(topSalesParams)])
  const newArrivals = newArrivalsResponse.data;
  const topSales = topSalesResponse.data;

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Hero />
        <CarouselBanner />
        <NewArrivals newArrivals={newArrivals} />
        <TopSales topSales={topSales} />
      </main>
    </div>
  )
}
