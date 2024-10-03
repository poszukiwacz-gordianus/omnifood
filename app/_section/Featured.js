import Image from "next/image";
import { featuredContent } from "../_content/content";

export default function Featured() {
  const { featuredIn, logoImages, altLogos } = featuredContent;

  return (
    <section className="px-8 py-12">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-secondary-400">
          {featuredIn}
        </h2>
        <div className="flex gap-12 px-8">
          {logoImages.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={altLogos[index]}
              className="h-8 opacity-50 brightness-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
