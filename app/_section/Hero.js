import Image from "next/image";
import Link from "next/link";
import { heroContent } from "../_content/content";

export default function Hero() {
  const {
    primaryButton,
    secondaryButton,
    header,
    description,
    avatars,
    altAvatars,
    highlightedText,
    text,
    heroImage,
    altHero,
  } = heroContent;
  return (
    <section className="bg-primary-100 px-10 pb-24 pt-9">
      <div className="mx-auto grid max-w-[1300px] grid-cols-2 items-center gap-12 gap-x-32 p-4">
        <div>
          <h1 className="mb-8 text-5xl font-bold leading-none tracking-tight text-accent-500">
            {header}
          </h1>
          <p className="mb-12 text-lg">{description}</p>
          <Link
            href="#"
            className="mr-4 inline-block rounded-lg bg-primary-500 px-8 py-4 text-xl font-semibold text-secondary-50 transition-all duration-300 hover:bg-primary-600"
          >
            {primaryButton}
          </Link>
          <Link
            href="#"
            className="inline-block rounded-lg bg-white px-8 py-4 text-xl font-semibold text-secondary-500 shadow-[inset_0_0_0_5px_#fff] transition-all duration-300 hover:bg-primary-100"
          >
            {secondaryButton}
          </Link>

          <div className="mt-20 flex items-center gap-8">
            <div className="flex">
              {avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar}
                  alt={altAvatars}
                  className="-mr-4 h-12 w-12 rounded-full border-2 border-solid border-primary-100"
                />
              ))}
            </div>
            <p className="text-lg font-semibold">
              <span className="font-bold text-primary-600">
                {highlightedText}
              </span>
              {text}
            </p>
          </div>
        </div>
        <div>
          <Image src={heroImage} alt={altHero} width="100%" />
        </div>
      </div>
    </section>
  );
}
