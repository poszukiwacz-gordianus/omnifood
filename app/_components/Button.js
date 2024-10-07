import Link from "next/link";

export default function Button({ type = "primary", href = "#", children }) {
  return (
    <Link
      href={href}
      className={`${type === "secondary" ? "bg-white text-secondary-500 shadow-[inset_0_0_0_5px_#fff] hover:bg-primary-100" : "bg-primary-500 text-secondary-50 hover:bg-primary-600"} inline-block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 sm:px-3 sm:py-4 sm:text-base lg:px-8 lg:py-2 lg:text-lg xl:px-9 xl:py-3 xl:text-xl`}
    >
      {children}
    </Link>
  );
}
