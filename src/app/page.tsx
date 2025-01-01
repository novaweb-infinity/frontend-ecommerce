import { getProducts } from "@/services/getProducts"

import CarouselBanner from "./components/CarouselBanner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"
import TopSales from "./components/TopSales"

export default async function Home() {
  const newArrivalsParams = {
    sort: ["createdAt:desc"],
    pagination: { limit: 6 },
    populate: "images",
  }

  const topSalesParams = {
    filters: { topVentas: { $eq: true } },
    populate: "images",
  }

  const [newArrivals, topSales] = await Promise.all([getProducts(newArrivalsParams), getProducts(topSalesParams)])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <CarouselBanner />
        <NewArrivals newArrivals={newArrivals} />
        <TopSales topSales={topSales} />
      </main>
    </div>
  )
}
