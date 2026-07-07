export function Hero() {
  return (
    <header
      id="inicio"
      className="relative flex min-h-screen items-center px-6 md:px-[8%]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/img/portada.png")' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl text-dark-foreground">
        <h1 className="font-serif text-5xl font-bold leading-[1.1] text-balance md:text-6xl lg:text-7xl">
          Muebles de madera hechos a medida
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-100 md:text-xl">
          Diseñamos y fabricamos muebles únicos para tu hogar, terraza o jardín.
        </p>
        <a
          href="#catalogo"
          className="mt-8 inline-block rounded-lg bg-primary px-9 py-4 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
        >
          Ver Catálogo
        </a>
      </div>
    </header>
  )
}
