import Image from "next/image";
import { heroContent } from "../_content/content";
import Button from "../_components/Button";

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

          <Button className="mr-4">{primaryButton}</Button>
          <Button type="secondary">{secondaryButton}</Button>

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
          <Image src={heroImage} alt={altHero} priority />
        </div>
      </div>
    </section>
  );
}
