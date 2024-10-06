import Link from "next/link";

export default function Button({ type = "primary", className = "", children }) {
  return (
    <Link
      href="#"
      className={`${type === "secondary" ? "bg-white text-secondary-500 shadow-[inset_0_0_0_5px_#fff] hover:bg-primary-100" : "bg-primary-500 text-secondary-50 hover:bg-primary-600"} inline-block rounded-xl px-3 py-4 text-base font-medium transition-all duration-300 lg:px-8 lg:py-2 lg:text-lg xl:px-9 xl:py-3 xl:text-xl`}
    >
      {children}
    </Link>
  );
}
