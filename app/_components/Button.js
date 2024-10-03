import Link from "next/link";

export default function Button({ type = "primary", className = "", children }) {
  return (
    <Link
      href="#"
      className={`${type === "secondary" ? "bg-white text-secondary-500 shadow-[inset_0_0_0_5px_#fff] hover:bg-primary-100" : "bg-primary-500 text-secondary-50 hover:bg-primary-600"} ${className} inline-block rounded-lg px-8 py-4 text-xl font-semibold transition-all duration-300`}
    >
      {children}
    </Link>
  );
}
