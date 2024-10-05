import Link from "next/link";
import Logo from "./Logo";

export default function FooterBrandSection({
  socialMediaLinks,
  copyrightText,
}) {
  return (
    <div className="flex flex-col">
      <span className="p-1"></span>
      <Logo />

      <ul className="mt-10 flex gap-6 text-2xl text-accent-400 transition-all duration-300">
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
