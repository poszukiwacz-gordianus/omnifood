import Image from "next/image";
import Link from "next/link";
import { logoContent } from "../_content/content";

export default function Logo() {
  return (
    <Link href="#">
      <Image
        src={logoContent.logo}
        alt={logoContent.alt}
        className="h-[1rem] w-32 md:h-[1.375rem] md:w-40"
      />
    </Link>
  );
}
