import Logo from "../_components/Logo";
import Navigation from "../_components/Navigation";

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-between bg-primary-100 px-10">
      <Logo />
      <Navigation />
    </header>
  );
}
