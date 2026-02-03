export default function About() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen */}
        <div className="w-full">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl
                          aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/3]">
            <img
              src="/menu/pizza.jpg"
              alt="La Italiana Posadas"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="uppercase tracking-[0.3em] text-xs text-gray-500">
            Nuestra historia
          </span>

          <h2 className="font-serif text-3xl md:text-4xl mt-4">
            Tradición italiana
            <br />
            <span className="text-[#1f7a3f]">
              desde la cocina
            </span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            En La Italiana elaboramos cada plato respetando las recetas
            tradicionales transmitidas de generación en generación.
            Ingredientes seleccionados y pasión por la cocina italiana.
          </p>
        </div>
      </div>
    </section>
  );
}
