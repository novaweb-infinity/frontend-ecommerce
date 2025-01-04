import { getProducts } from "@/services/getProducts"
import { QueryParamsProps } from "@/types/"

import CarouselBanner from "./Home/CarouselBanner"
import Hero from "./Home/Hero"
import NewArrivals from "./Home/NewArrivals"
import TopSales from "./Home/TopSales"

export default async function Home() {
  const newArrivalsParams: QueryParamsProps = {
    filters: {
      isFeature: { $eq: true },
    },
    pagination: {
      limit: 8,
    },
    populate: "images",
  }

  const topSalesParams: QueryParamsProps = {
    filters: {
      topVentas: { $eq: true },
    },
    pagination: {
      limit: 3,
    },
    populate: "images",
  }

  const [newArrivalsResponse, topSalesResponse] = await Promise.all([
    getProducts(newArrivalsParams),
    getProducts(topSalesParams),
  ])
  const newArrivals = newArrivalsResponse.data
  const topSales = topSalesResponse.data

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
