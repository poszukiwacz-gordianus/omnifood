import Image from "next/image";

export default function TestimonialCard({ testimonials = [] }) {
  return testimonials.map((t, index) => (
    <figure key={index}>
      <Image
        src={t.image}
        alt={`Photo of customer ${t.customer}`}
        className="mb-3 w-12 rounded-full lg:w-16"
        sizes="100vw"
        placeholder="blur"
      />
      <blockquote className="mb-4 text-base sm:text-sm lg:text-base xl:text-lg">
        {t.testimonial}
      </blockquote>
      <p className="text-sm text-accent-400 xl:text-base">
        &mdash; {t.customer}
      </p>
    </figure>
  ));
}
