import Link from "next/link";

export default function FooterLinks({ footerLinks }) {
  return footerLinks.map((section) => (
    <nav key={section.section}>
      <p className="mb-8 text-lg font-medium">{section.section}</p>
      <ul className="flex flex-col gap-4 text-base text-accent-400 transition-all duration-300">
        {section.links.map((link, index) => (
          <li key={index} className="hover:text-accent-500">
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  ));
}
