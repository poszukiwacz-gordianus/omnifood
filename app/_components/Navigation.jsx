import Link from "next/link";
import { navigationContent } from "../_content/content";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationContent.map((nav, i) => (
          <li key={nav.text}>
            <Link
              href={nav.link}
              aria-label={`Go to ${nav.text}`}
              className={`inline-block text-lg font-medium text-accent-500 transition-all duration-300 hover:text-primary-600 ${i + 1 === navigationContent?.length ? "rounded-lg bg-primary-500 px-6 py-3 text-secondary-50 hover:bg-primary-600 hover:text-secondary-50" : ""}`}
            >
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
