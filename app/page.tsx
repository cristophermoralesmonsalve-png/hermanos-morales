import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Catalogo } from "@/components/catalogo"
import { Galeria } from "@/components/galeria"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Catalogo />
      <Galeria />
      <Footer />
    </main>
  )
}
