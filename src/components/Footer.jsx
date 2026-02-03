export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-gray-300 pt-16">
      
      {/* Línea italiana */}
      <div className="flex h-2">
        <div className="flex-1 bg-[#1f5e3b]"></div>
        <div className="flex-1 bg-[#f8f5f2]"></div>
        <div className="flex-1 bg-[#8b1e1e]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 text-center">
        <h4 className="font-serif text-3xl text-white mb-3">
          La Italiana 
        </h4>

        <p className="text-sm text-gray-400 mb-8">
          Tradición italiana en cada plato
        </p>

        <p className="text-xs text-gray-500">
          © 2026 La Italiana. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
