import Gallery from "../_components/Gallery";
import SectionHeader from "../_components/SectionHeader";
import TestimonialCard from "../_components/TestimonialCard";
import { galleryImages, testimonialsContent } from "../_content/content";

export default function Testimonials() {
  const { header, subHeader, testimonials } = testimonialsContent;
  return (
    <section className="grid grid-cols-[55fr_45fr] items-center bg-primary-100">
      <div className="py-24 pl-12">
        <div>
          <SectionHeader header={header} subHeader={subHeader} />
        </div>

        <div className="grid grid-cols-2 gap-12 gap-x-12 gap-y-12">
          <TestimonialCard testimonials={testimonials} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <Gallery images={galleryImages} />
      </div>
    </section>
  );
}
