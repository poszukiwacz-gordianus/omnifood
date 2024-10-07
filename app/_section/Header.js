"use client";
import { Logo, Navigation } from "@/app/_components/Components";
import { useStickyHeaderContext } from "../_context/StickyHeaderContext";

export default function Header() {
  const { sticky } = useStickyHeaderContext();

  return (
    <header
      className={`${sticky ? "fixed bottom-0 top-0 z-50 w-full bg-[#ffffffed] py-0 shadow-sm md:h-16" : "relative bg-primary-100 md:h-24"} flex items-center justify-between px-6 md:px-12`}
    >
      <Logo />
      <Navigation sticky={sticky} />
    </header>
  );
}
