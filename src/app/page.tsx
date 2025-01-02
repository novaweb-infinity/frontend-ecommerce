import { getProducts } from "@/services/getProducts"

// import Login from "./components/Auth/Login"
import CarouselBanner from "./components/CarouselBanner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"
import TopSales from "./components/TopSales"

export default async function Home() {
  const newArrivalsParams = {
    filters: { isFeature: { $eq: true } },
    pagination: { limit: 4 },
    populate: "images",
  }

  const topSalesParams = {
    filters: { topVentas: { $eq: true } },
    pagination: { limit: 3 },
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
        {/* <Login /> */}
      </main>
    </div>
  )
}
