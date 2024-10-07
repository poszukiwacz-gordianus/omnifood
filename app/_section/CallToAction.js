import Image from "next/image";
import {
  SectionDefault,
  CallToActionForm,
  SectionHeader,
  Container,
} from "@/app/_components/Components";
import { callToActionContent } from "../_content/content";

export default function CallToAction() {
  const { header, description, image, alt, formContent } = callToActionContent;
  return (
    <SectionDefault id="cta" className="pb-12 sm:pb-24 lg:py-12 lg:pb-32">
      <Container>
        <div className="grid grid-rows-[1.1fr_2fr] overflow-hidden rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 text-primary-950 shadow-2xl sm:grid-cols-[2fr_1fr] sm:grid-rows-1">
          <div className="order-2 p-6 sm:order-1 sm:p-10 lg:p-16 lg:pt-12">
            <SectionHeader
              header={header}
              headerClassName="!mb-6 !text-2xl md:!text-3xl text-inherit tracking-[0.001rem]"
            />
            <p className="mb-6 text-sm leading-6 md:text-base lg:mb-12 lg:text-lg">
              {description}
            </p>

            <CallToActionForm formContent={formContent} />
          </div>

          <div className="relative order-1 sm:order-2">
            <Image
              src={image}
              alt={alt}
              fill
              placeholder="blur"
              className="object-cover"
            />
            <span className="absolute inset-0 z-10 bg-gradient-to-br from-primary-500 to-primary-400 opacity-35"></span>
          </div>
        </div>
      </Container>
    </SectionDefault>
  );
}
