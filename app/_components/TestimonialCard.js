import Image from "next/image";

export default function TestimonialCard({ testimonials = [] }) {
  return testimonials.map((t, index) => (
    <figure key={index}>
      <Image
        src={t.image}
        alt={`Photo of customer ${t.customer}`}
        className="mb-3 w-16 rounded-full"
      />
      <blockquote className="mb-4 text-lg">{t.testimonial}</blockquote>
      <p className="text-base text-accent-400">&mdash; {t.customer}</p>
    </figure>
  ));
}
