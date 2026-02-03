export default function Location() {
  return (
    <section className="bg-[#f8f5f2] py-24">
        {/* Línea italiana */}
      <div className="flex h-2">
        <div className="flex-1 bg-[#1f5e3b]"></div>
        <div className="flex-1 bg-[#f8f5f2]"></div>
        <div className="flex-1 bg-[#8b1e1e]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif text-gray-900 mb-4">
          Dónde Estamos
        </h2>

        <p className="text-gray-600 mb-14">
          Visitános en el corazón de Posadas
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <span className="text-3xl">📍</span>
            <p className="mt-4 font-medium text-gray-800">
              Posadas, Misiones
            </p>
            <p className="text-sm text-gray-500">Argentina</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <span className="text-3xl">⏰</span>
            <p className="mt-4 font-medium text-gray-800">
              Todos los días
            </p>
            <p className="text-sm text-gray-500">12:00 a 23:30</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <span className="text-3xl">📞</span>
            <p className="mt-4 font-medium text-gray-800">
              376 5XXXXXX
            </p>
            <p className="text-sm text-gray-500">Reservas y pedidos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
