export default function Button({ children, variant = "primary", href }) {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all";

  const styles = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white text-black hover:bg-gray-200",
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}
