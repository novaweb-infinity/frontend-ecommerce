import { newArrivalsParams, topSalesParams } from "@/api/queryParamsProduct"
import { getProducts } from "@/api/services/getProducts"
import CarouselBanner from "@/components/Home/CarouselBanner"
import Hero from "@/components/Home/Hero"
import NewArrivals from "@/components/Home/NewArrivals"
import TopSales from "@/components/Home/TopSales"

export default async function Home() {
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
