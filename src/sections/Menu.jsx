import { useRef } from "react";
import MenuCard from "../components/MenuCard";

export default function Menu({ items = [] }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 320;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (items.length === 0) return null;

  return (
    <section className="py-24 bg-[#fafafa] relative">
      {/* TITULO */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
          Nuestro Menú
        </h2>
        <div className="mt-4 flex justify-center gap-2">
          <span className="w-10 h-[3px] bg-green-700" />
          <span className="w-10 h-[3px] bg-white border" />
          <span className="w-10 h-[3px] bg-red-700" />
        </div>
      </div>

      {/* FLECHA IZQUIERDA */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white shadow-lg hover:scale-105 transition"
      >
        ‹
      </button>

      {/* CARRUSEL */}
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-scroll scroll-smooth px-6 md:px-20 no-scrollbar"
      >
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      {/* FLECHA DERECHA */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10
        w-12 h-12 rounded-full bg-white shadow-lg hover:scale-105 transition"
      >
        ›
      </button>
    </section>
  );
}
