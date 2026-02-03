import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#1f2937]/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <span className="font-serif text-2xl text-white tracking-wide">
          La Italiana
        </span>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-gray-200">
          <a href="#nosotros" className="hover:text-white transition">
            Nosotros
          </a>
          <a href="#menu" className="hover:text-white transition">
            Menú
          </a>
          <a href="#galeria" className="hover:text-white transition">
            Galería
          </a>
          <a href="#ubicacion" className="hover:text-white transition">
            Ubicación
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5493765xxxxxx"
          target="_blank"
          className="bg-[#8b1e1e] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6f1616] transition"
        >
          Pedir
        </a>
      </div>
    </header>
  );
}
