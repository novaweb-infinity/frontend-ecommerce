import CarouselBanner from "./components/CarouselBanner"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"
import TopSales from "./components/TopSales"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <CarouselBanner />
        <NewArrivals />
        <TopSales />
      </main>
    </div>
  )
}
