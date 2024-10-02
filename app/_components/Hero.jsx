import Image from "next/image";
import hero from "@/public/img/hero.png";
import Link from "next/link";

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const avatars = importAll(
  require.context("@/public/img/customers", false, /\.(png|jpe?g|svg)$/),
);

export default function Hero() {
  return (
    <section className="bg-primary-100 px-16 pb-24 pt-9">
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 items-center gap-12 gap-x-32">
        <div>
          <h1 className="mb-8 text-5xl font-bold leading-none tracking-tight text-accent-500">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="mb-12 text-lg">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <Link
            href="#"
            className="mr-4 inline-block rounded-lg bg-primary-500 px-8 py-4 text-xl font-semibold text-secondary-50 transition-all duration-300 hover:bg-primary-600"
          >
            Start eating well
          </Link>
          <Link
            href="#"
            className="inline-block rounded-lg bg-white px-8 py-4 text-xl font-semibold text-secondary-500 shadow-[inset_0_0_0_3px_#F5F5F5] transition-all duration-300 hover:bg-primary-200"
          >
            Learn more &darr;
          </Link>

          <div className="mt-20 flex items-center gap-8">
            <div className="flex">
              {avatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar.default}
                  alt={`Customer photo`}
                  className="-mr-4 h-12 w-12 rounded-full border-2 border-solid border-primary-100"
                />
              ))}
            </div>
            <p className="text-lg font-semibold">
              <span className="font-bold text-primary-600">250,000+</span> meals
              delivered last year!
            </p>
          </div>
        </div>
        <div>
          <Image
            src={hero}
            alt="Three images, woman enjoying food, meals in storage container, and food bowls on a table"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}
