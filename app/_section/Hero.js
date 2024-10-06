import Image from "next/image";
import { heroContent } from "../_content/content";
import { Button, SectionHeader } from "@/app/_components/Components";

export default function Hero() {
  const {
    primaryButton,
    secondaryButton,
    header,
    description,
    avatars,
    altAvatars,
    additionalText,
    heroImage,
    altHero,
  } = heroContent;
  return (
    <section className="bg-primary-100">
      <div className="flex flex-col items-center justify-center gap-10 p-6 text-center lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-x-6 lg:px-8 lg:text-left xl:gap-20 xl:px-10 xxl:max-w-screen-xl">
        <div className="flex flex-col items-center justify-center gap-8 lg:items-start">
          <SectionHeader
            header={header}
            headerClassName="text-4xl xl:text-5xl"
          />
          <p className="-mt-10 mb-5 px-6 text-base lg:px-0 lg:text-lg xl:text-xl">
            {description}
          </p>

          <div className="flex gap-4 lg:mb-8 lg:gap-8">
            <Button>{primaryButton}</Button>
            <Button type="secondary">{secondaryButton}</Button>
          </div>

          <div className="flex items-center">
            <div className="flex">
              {avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar}
                  alt={altAvatars}
                  className="-mr-2 h-9 w-9 rounded-full border-2 border-solid border-primary-100 lg:-mr-4 lg:h-12 lg:w-12 lg:border-[3px] xl:h-14 xl:w-14"
                />
              ))}
            </div>
            <p className="ml-3 text-sm font-medium lg:ml-24 lg:text-base xl:ml-8 xl:text-lg xxl:ml-16">
              {additionalText}
            </p>
          </div>
        </div>

        <Image
          src={heroImage}
          alt={altHero}
          priority
          q={100}
          className="w-80 lg:w-full"
        />
      </div>
    </section>
  );
}
