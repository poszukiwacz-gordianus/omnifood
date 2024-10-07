"use client";
import { Logo, Navigation } from "@/app/_components/Components";
import { useNavigationContext } from "../_context/NavigationContext";

export default function Header() {
  const { sticky } = useNavigationContext();

  return (
    <header
      className={`${sticky ? "fixed bottom-0 top-0 z-50 h-12 w-full bg-[#ffffffed] py-0 shadow-sm md:h-16" : "relative bg-primary-100 sm:h-24"} flex items-center justify-between px-6 md:px-12`}
    >
      <Logo />
      <Navigation />
    </header>
  );
}
