import {
  Container,
  FeaturesCard,
  PricingCard,
  SectionDefault,
  SectionHeader,
} from "@/app/_components/Components";
import { featuresContent, pricingContent } from "../_content/content";

export default function Pricing() {
  const { header, subHeader, footer, pricingPlans } = pricingContent;
  return (
    <SectionDefault id="pricing">
      <Container>
        <SectionHeader header={header} subHeader={subHeader} />

        <div className="mb-8 flex flex-col items-center justify-center gap-6 md:mb-12 md:grid md:grid-cols-2 md:items-stretch md:justify-start md:gap-x-10 md:gap-y-24">
          <PricingCard plans={pricingPlans} />
        </div>

        <div>
          <aside className="mb-12 text-center text-sm text-accent-400 md:mb-24 md:text-base">
            {footer}
          </aside>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-3 xl:gap-x-16 xl:gap-y-24">
          <FeaturesCard features={featuresContent} />
        </div>
      </Container>
    </SectionDefault>
  );
}
