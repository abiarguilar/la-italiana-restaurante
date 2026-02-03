export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen pt-24 md:pt-32 flex items-center">
      
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center"
        style={{
          backgroundImage: "url('/menu/portada.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/75" />

      {/* Acento verde italiano */}
      <div className="absolute left-0 top-0 h-full w-[6px] bg-[#1f7a3f]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <span className="uppercase tracking-[0.25em] text-xs md:text-sm text-gray-300">
          Cocina italiana auténtica
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-4 leading-tight">
          El sabor de Italia
          <br />
          <span className="text-[#b91c1c]">
            en cada plato
          </span>
        </h1>

        <p className="max-w-md md:max-w-xl mt-4 md:mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
          Pastas artesanales, pizzas tradicionales y recetas
          que respetan la auténtica tradición italiana.
        </p>

        {/* Botones */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#menu"
            className="bg-[#8b1e1e] hover:bg-[#6f1616] transition px-7 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium text-center"
          >
            Ver menú
          </a>

          <a
            href="#ubicacion"
            className="border border-white/40 hover:border-white transition px-7 py-3 md:px-8 md:py-4 rounded-full text-sm text-center"
          >
            Ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
