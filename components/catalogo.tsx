"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, MessageCircle } from "lucide-react"
import { categorias, WHATSAPP_URL } from "@/lib/catalogo"

export function Catalogo() {
  const [categoriaId, setCategoriaId] = useState(categorias[0].id)
  const categoria = categorias.find((c) => c.id === categoriaId) ?? categorias[0]

  const [modeloId, setModeloId] = useState(categoria.modelos[0].id)
  const modelo =
    categoria.modelos.find((m) => m.id === modeloId) ?? categoria.modelos[0]

  const handleCategoria = (id: string) => {
    setCategoriaId(id)
    const nueva = categorias.find((c) => c.id === id)
    if (nueva) setModeloId(nueva.modelos[0].id)
  }

  return (
    <section id="catalogo" className="bg-background px-6 py-24 md:px-[7%]">
      <div className="mx-auto grid max-w-[1600px] items-start gap-8 lg:grid-cols-[280px_320px_1fr]">
        {/* PANEL IZQUIERDO — CATEGORÍAS */}
        <aside className="rounded-2xl bg-dark p-6 text-dark-foreground lg:sticky lg:top-28">
          <h2 className="mb-8 font-serif text-2xl font-bold">Categorías</h2>
          <div className="flex flex-col gap-4">
            {categorias.map((cat) => {
              const Icono = cat.icono
              const activa = cat.id === categoriaId
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoria(cat.id)}
                  aria-pressed={activa}
                  className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-300 ${
                    activa
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-transparent hover:translate-x-1.5 hover:border-primary hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${
                      activa ? "bg-white" : "bg-white/10"
                    }`}
                  >
                    <Icono size={24} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">{cat.nombre}</span>
                    <span className="block text-sm opacity-75">{cat.descripcion}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </aside>

        {/* PANEL CENTRAL — MODELOS */}
        <div className="rounded-2xl bg-card p-6 shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
          <h2 className="mb-6 font-serif text-2xl font-bold text-card-foreground">
            Modelos disponibles
          </h2>
          <div className="flex flex-col gap-4">
            {categoria.modelos.map((m) => {
              const activo = m.id === modeloId
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setModeloId(m.id)}
                  aria-pressed={activo}
                  className={`flex items-center gap-4 rounded-2xl border-2 p-3.5 text-left transition-all duration-300 ${
                    activo
                      ? "border-primary bg-primary/10"
                      : "border-transparent hover:translate-x-1 hover:border-primary hover:bg-black/5"
                  }`}
                >
                  <Image
                    src={m.imagen || "/placeholder.svg"}
                    alt={m.nombre}
                    width={90}
                    height={90}
                    className="h-[90px] w-[90px] flex-shrink-0 rounded-xl object-cover"
                  />
                  <span>
                    <span className="block text-lg font-semibold text-card-foreground">
                      {m.nombre}
                    </span>
                    <span className="block text-sm text-muted">{m.subtitulo}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* PANEL DERECHO — DETALLE */}
        <div className="rounded-2xl bg-card p-6 shadow-[0_15px_35px_rgba(0,0,0,0.08)] md:p-8">
          <div className="relative mb-6 h-[280px] w-full overflow-hidden rounded-2xl md:h-[420px] lg:h-[520px]">
            <Image
              src={modelo.imagen || "/placeholder.svg"}
              alt={modelo.nombre}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          <h2 className="mb-5 font-serif text-3xl font-bold text-card-foreground">
            {modelo.nombre}
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted">{modelo.descripcion}</p>

          <ul className="mb-9 flex flex-col">
            {modelo.caracteristicas.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-b border-border py-3 text-card-foreground"
              >
                <Check size={18} className="flex-shrink-0 text-primary" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
