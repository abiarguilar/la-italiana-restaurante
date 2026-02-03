export default function MenuCard({ item }) {
  return (
    <div className="min-w-[280px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[220px] object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-serif text-gray-900">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {item.description}
        </p>

        <div className="mt-4 text-lg font-semibold text-green-700">
          ${item.price}
        </div>
      </div>
    </div>
  );
}
