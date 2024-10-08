import {
  Gallery,
  SectionHeader,
  TestimonialCard,
} from "@/app/_components/Components";
import { galleryImages, testimonialsContent } from "../_content/content";

export default function Testimonials() {
  const { header, subHeader, testimonials } = testimonialsContent;
  return (
    <section className="bg-primary-100 py-14 lg:py-24" id="testimonials">
      <div className="grid items-center gap-10 lg:mx-auto lg:grid-cols-[55fr_45fr] lg:gap-0 xxl:max-w-screen-xl">
        <div className="px-6">
          <div>
            <SectionHeader header={header} subHeader={subHeader} />
          </div>

          <div className="grid gap-12 gap-x-12 gap-y-12 sm:grid-cols-2">
            <TestimonialCard testimonials={testimonials} />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 p-4 sm:grid-cols-6 lg:grid-cols-3">
          <Gallery images={galleryImages} />
        </div>
      </div>
    </section>
  );
}
