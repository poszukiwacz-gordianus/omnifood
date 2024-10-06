import Link from "next/link";
import { Logo } from "@/app/_components/Components";

export default function FooterBrandSection({
  socialMediaLinks,
  copyrightText,
}) {
  return (
    <div className="order-2 flex flex-col md:order-1">
      <span className="p-[2px] md:p-[1px] lg:p-1"></span>
      <Logo />

      <ul className="mt-6 flex gap-4 text-lg text-accent-400 transition-all duration-300 lg:mt-10 lg:gap-6 lg:text-2xl">
        {socialMediaLinks.map((social, index) => (
          <li key={index} className="hover:text-accent-500">
            <Link href={social.link}>{social.media}</Link>
          </li>
        ))}
      </ul>

      <p className="mt-auto text-xs text-accent-400">{copyrightText}</p>
    </div>
  );
}
