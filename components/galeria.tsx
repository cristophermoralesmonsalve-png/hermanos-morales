import Image from "next/image"

const imagenes = [
  "/img/sofas/sofa1-1.jpg",
  "/img/bancas/banca1-3.jpg",
  "/img/sofas/sofa1-3.jpg",
  "/img/bancas/banca2-3.jpg",
  "/img/sofas/sofa1-5.jpg",
  "/img/bancas/banca1-6.jpg",
  "/img/sofas/sofa1-8.jpg",
  "/img/bancas/banca2-5.jpg",
]

export function Galeria() {
  return (
    <section id="galeria" className="bg-dark px-6 py-24 md:px-[8%]">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-bold text-dark-foreground text-balance md:text-5xl">
            Nuestros trabajos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Cada pieza es fabricada a mano con dedicación. Explora algunos de los muebles que hemos creado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {imagenes.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ${
                i % 3 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Mueble de madera a medida fabricado por Hermanos Morales, ejemplo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
