"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/catalogo"

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md transition-colors duration-300 md:px-[8%] ${
        scrolled ? "bg-dark shadow-[0_10px_30px_rgba(0,0,0,0.25)]" : "bg-black/70"
      }`}
    >
      <a href="#inicio" className="font-serif text-2xl font-bold text-primary md:text-3xl">
        Hermanos Morales
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {enlaces.map((enlace) => (
          <li key={enlace.href}>
            <a
              href={enlace.href}
              className="text-sm font-medium text-dark-foreground transition-colors hover:text-primary"
            >
              {enlace.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Cotizar
          </a>
        </li>
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover md:hidden"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Cotizar
      </a>
    </nav>
  )
}
