import { useEffect, useRef } from "react";

const images = Array.from({ length: 9 }, (_, i) => `/images/gallery/${i + 1}.webp`);

export default function Gallery() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationId;
    let position = 0;

    const speed = 0.5; // velocidad del carrusel

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-[#faf7f2] py-20 overflow-hidden">
        <div className="flex h-2">
        <div className="flex-1 bg-[#1f5e3b]"></div>
        <div className="flex-1 bg-[#f8f5f2]"></div>
        <div className="flex-1 bg-[#8b1e1e]"></div>
      </div>
      <div className="text-center mb-12">
        <p className="text-green-700 tracking-[0.3em] text-sm">GALERÍA</p>
        <h2 className="font-serif text-4xl mt-3 text-gray-900">
          Momentos La Italiana
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
        >
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[250px] md:w-[300px] h-[260px] rounded-full overflow-hidden border-5 ring-2 ring-red-700 ring-offset-2 ring-offset-[#faf7f2]"
            >
              <img
                src={src}
                alt="La Italiana"
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
