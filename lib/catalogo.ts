import type { LucideIcon } from "lucide-react"
import { Armchair, Sofa, Trees, House } from "lucide-react"

export type Modelo = {
  id: string
  nombre: string
  subtitulo: string
  imagen: string
  descripcion: string
  caracteristicas: string[]
  /** Fotos adicionales del producto (además de `imagen`) para la galería de detalle. */
  galeria?: string[]
  /** Ficha técnica / lámina del producto mostrada en tamaño completo. */
  ficha?: string
  /** Precio formateado, ej. "$25.000". */
  precio?: string
  /** Medidas del producto (etiqueta + valor), ej. { label: "Ancho", valor: "70 cm" }. */
  medidas?: { label: string; valor: string }[]
}

export type Categoria = {
  id: string
  nombre: string
  descripcion: string
  icono: LucideIcon
  modelos: Modelo[]
}

const caracteristicasBase = [
  "Fabricación a medida",
  "Diferentes colores",
  "Terminación premium",
  "Uso interior y exterior",
]

export const categorias: Categoria[] = [
  {
    id: "sillones",
    nombre: "Sillones individuales",
    descripcion: "Modelos personalizados",
    icono: Sofa,
    modelos: [
      {
        id: "sillon-natural",
        nombre: "Sillón Natural",
        subtitulo: "Madera de pino",
        imagen: "/img/sofas/sofa1-7.jpg",
        descripcion:
          "Sillón individual fabricado en madera de pino con acabado natural. Comodidad y diseño artesanal para tus espacios de descanso.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "sillon-clasico",
        nombre: "Sillón Clásico",
        subtitulo: "Estilo atemporal",
        imagen: "/img/sofas/sofa1-2.jpg",
        descripcion:
          "Sillón de líneas clásicas ideal para living y salas de estar. Estructura robusta con terminación premium.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "sillon-rustico",
        nombre: "Sillón Rústico",
        subtitulo: "Acabado envejecido",
        imagen: "/img/sofas/sofa1-4.jpg",
        descripcion:
          "Sillón con carácter rústico, perfecto para quinchos y terrazas. Madera tratada para resistir el uso exterior.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "sillon-moderno",
        nombre: "Sillón Moderno",
        subtitulo: "Diseño actual",
        imagen: "/img/sofas/sofa1-6.jpg",
        descripcion:
          "Sillón de diseño moderno y minimalista que se adapta a cualquier ambiente contemporáneo.",
        caracteristicas: caracteristicasBase,
      },
    ],
  },
  {
    id: "bancas",
    nombre: "Bancas y Asientos",
    descripcion: "Diferentes estilos",
    icono: Armchair,
    modelos: [
      {
        id: "banca-natural",
        nombre: "Banca Natural",
        subtitulo: "Madera de pino",
        imagen: "/img/bancas/banca1-1.jpg",
        descripcion:
          "Fabricada en madera de alta calidad. Ideal para terrazas, jardines, quinchos y espacios interiores.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "banca-nogal",
        nombre: "Banca Nogal",
        subtitulo: "Tono nogal",
        imagen: "/img/bancas/banca2-1.jpg",
        descripcion:
          "Banca con acabado en tono nogal que aporta calidez y elegancia a cualquier ambiente.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "banca-alerce",
        nombre: "Banca Alerce",
        subtitulo: "Acabado natural",
        imagen: "/img/bancas/banca1-2.jpg",
        descripcion:
          "Banca de líneas simples con acabado natural que resalta la veta de la madera.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "banca-roble",
        nombre: "Banca Roble",
        subtitulo: "Diseño moderno",
        imagen: "/img/bancas/banca2-2.jpg",
        descripcion:
          "Banca de diseño moderno en tono roble, resistente y perfecta para el uso diario.",
        caracteristicas: caracteristicasBase,
      },
    ],
  },
  {
    id: "jardin",
    nombre: "Jardín y Exterior",
    descripcion: "Muebles resistentes",
    icono: Trees,
    modelos: [
      {
        id: "porta-maceteros",
        nombre: "Porta Maceteros",
        subtitulo: "Colección Roble",
        imagen: "/img/exterior/exterior1-5.jpg",
        descripcion:
          "Fabricado en pino radiata macizo, este porta maceteros combina un diseño moderno con un acabado artesanal. Sus repisas permiten exhibir plantas, adornos y pequeños objetos decorativos, convirtiéndose en un elemento funcional que aporta calidez y personalidad a cualquier ambiente.",
        caracteristicas: [
          "Madera maciza de pino radiata",
          "Tinte natural + protector exterior",
          "Colores: natural, nogal y caoba",
          "Hecho a mano, terminación artesanal",
        ],
        precio: "$25.000",
        medidas: [
          { label: "Ancho", valor: "70 cm (aprox.)" },
          { label: "Alto", valor: "40 cm (aprox.)" },
          { label: "Profundidad", valor: "9 cm (aprox.)" },
        ],
        galeria: [
          "/img/exterior/exterior1-5.jpg",
          "/img/exterior/exterior1-6.jpg",
          "/img/exterior/exterior1-7.jpg",
          "/img/exterior/exterior1-4.jpg",
          "/img/exterior/exterior1-3.jpg",
          "/img/exterior/exterior1-2.jpg",
        ],
        ficha: "/img/exterior/macetero-principal.png",
      },
      {
        id: "banca-exterior",
        nombre: "Banca de Exterior",
        subtitulo: "Resistente a la intemperie",
        imagen: "/img/bancas/banca1-4.jpg",
        descripcion:
          "Banca tratada especialmente para exteriores. Resiste el sol, la lluvia y el paso del tiempo.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "banca-terraza",
        nombre: "Banca de Terraza",
        subtitulo: "Ideal para quinchos",
        imagen: "/img/bancas/banca1-5.jpg",
        descripcion:
          "Diseñada para terrazas y quinchos, combina comodidad y durabilidad para tus reuniones al aire libre.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "banca-jardin",
        nombre: "Banca de Jardín",
        subtitulo: "Estilo natural",
        imagen: "/img/bancas/banca2-4.jpg",
        descripcion:
          "Banca de jardín con estilo natural que se integra perfectamente en espacios verdes.",
        caracteristicas: caracteristicasBase,
      },
    ],
  },
  {
    id: "interior",
    nombre: "Interior",
    descripcion: "Diseños modernos",
    icono: House,
    modelos: [
      {
        id: "sofa-interior",
        nombre: "Sofá de Interior",
        subtitulo: "Confort para el living",
        imagen: "/img/sofas/sofa1-1.jpg",
        descripcion:
          "Sofá pensado para interiores, con estructura de madera maciza y máximo confort para tu living.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "sofa-elegante",
        nombre: "Sofá Elegante",
        subtitulo: "Terminación fina",
        imagen: "/img/sofas/sofa1-5.jpg",
        descripcion:
          "Sofá de terminación fina y elegante, ideal para espacios interiores que buscan distinción.",
        caracteristicas: caracteristicasBase,
      },
      {
        id: "sofa-compacto",
        nombre: "Sofá Compacto",
        subtitulo: "Espacios reducidos",
        imagen: "/img/sofas/sofa1-8.jpg",
        descripcion:
          "Sofá compacto perfecto para departamentos y espacios reducidos, sin sacrificar comodidad.",
        caracteristicas: caracteristicasBase,
      },
    ],
  },
]

export const WHATSAPP_URL = "https://wa.me/56966060170"
