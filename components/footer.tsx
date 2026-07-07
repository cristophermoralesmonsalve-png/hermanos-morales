import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/catalogo"

export function Footer() {
  return (
    <footer id="contacto" className="bg-dark px-6 py-16 text-dark-foreground md:px-[8%]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-10">
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl font-bold">Hermanos Morales</h2>
          <p className="mt-4 leading-relaxed text-neutral-400">
            Fabricación de muebles de madera a medida. Diseños exclusivos para interiores y exteriores.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Contacto</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 text-lg transition-colors hover:text-primary"
          >
            <MessageCircle size={22} className="text-primary" aria-hidden="true" />
            +56 9 6606 0170
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/10 pt-6 text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} Hermanos Morales. Todos los derechos reservados.
      </div>
    </footer>
  )
}
