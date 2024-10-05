import Image from "next/image";
import Link from "next/link";
import { logoContent } from "../_content/content";

export default function Logo() {
  return (
    <Link href="#">
      <Image
        src={logoContent.logo}
        alt={logoContent.alt}
        className="block w-40"
      />
    </Link>
  );
}
