import Image from "next/image";
import SectionDefault from "../_components/SectionDefault";
import CallToActionForm from "../_components/CallToActionForm";
import SectionHeader from "../_components/SectionHeader";
import { callToActionContent } from "../_content/content";

export default function CallToAction() {
  const { header, description, image, alt, formContent } = callToActionContent;
  return (
    <SectionDefault>
      <div className="grid grid-cols-[2fr_1fr] overflow-hidden rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 text-primary-950 shadow-2xl">
        <div className="p-16 pt-12">
          <SectionHeader
            header={header}
            headerClassName="mb-8 text-inherit tracking-[0.001rem]"
          />
          <p className="mb-12 text-lg">{description}</p>

          <CallToActionForm formContent={formContent} />
        </div>

        <div className="relative">
          <Image src={image} alt={alt} fill className="object-cover" />
          <span className="absolute inset-0 z-10 bg-gradient-to-br from-primary-500 to-primary-400 opacity-35"></span>
        </div>
      </div>
    </SectionDefault>
  );
}
