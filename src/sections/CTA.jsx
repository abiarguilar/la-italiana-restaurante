export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Verde */}
      <div className="bg-[#1f5e3b] py-6"></div>

      {/* Blanco */}
      <div className="bg-[#f8f5f2] py-24 text-center px-6">
        <div className="flex h-2">
        <div className="flex-1 bg-[#1f5e3b]"></div>
        <div className="flex-1 bg-[#f8f5f2]"></div>
        <div className="flex-1 bg-[#8b1e1e]"></div>
      </div>
        <h3 className="text-5xl font-serif text-gray-900 mb-6">
          ¿Listo para disfrutar?
        </h3>

        <p className="text-gray-600 mb-10 text-lg">
          Reservá tu mesa o pedí ahora por WhatsApp
        </p>

        <a
          href="https://wa.me/5493765xxxxxx"
          target="_blank"
          className="inline-block bg-[#8b1e1e] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#6f1616] transition"
        >
          Pedir por WhatsApp
        </a>
      </div>

      {/* Rojo */}
      <div className="bg-[#8b1e1e] py-6"></div>
    </section>
  );
}
