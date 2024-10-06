import Link from "next/link";

export default function FooterLinks({ footerLinks }) {
  return footerLinks.map((section) => (
    <nav key={section.section} className="order-1 md:order-3">
      <p className="mb-6 text-sm font-medium lg:mb-8 lg:text-lg">
        {section.section}
      </p>
      <ul className="flex flex-col gap-3 text-xs text-accent-400 transition-all duration-300 lg:gap-4 lg:text-base">
        {section.links.map((link, index) => (
          <li key={index} className="hover:text-accent-500">
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ));
}
