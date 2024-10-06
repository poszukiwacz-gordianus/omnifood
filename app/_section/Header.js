import { Logo, Navigation } from "@/app/_components/Components";

export default function Header() {
  return (
    <header className="relative flex h-16 items-center justify-between bg-primary-100 px-6 md:h-24 md:px-12">
      <Logo />
      <Navigation />
    </header>
  );
}
