import Image from "next/image";
import { Container } from "@/app/_components/Components";
import { featuredContent } from "../_content/content";

export default function FeaturedIn() {
  const { featuredIn, logoImages, altLogos } = featuredContent;

  return (
    <section className="pb-2 pt-6 lg:pb-8 lg:pt-12">
      <Container>
        <h2 className="mb-6 text-center text-xs font-medium uppercase tracking-wider text-secondary-400 lg:text-sm">
          {featuredIn}
        </h2>
        <div className="flex justify-around">
          {logoImages.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={altLogos[index]}
              className="h-[1rem] w-[4.5rem] opacity-50 brightness-0 md:h-[1.4rem] md:w-[7rem] lg:h-[1.9rem] lg:w-[8rem]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
