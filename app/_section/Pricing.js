import FeaturesCard from "../_components/FeaturesCard";
import PricingCard from "../_components/PricingCard";
import SectionDefault from "../_components/SectionDefault";
import SectionHeader from "../_components/SectionHeader";
import { featuresContent, pricingContent } from "../_content/content";

export default function Pricing() {
  const { header, subHeader, footer, pricingPlans } = pricingContent;
  return (
    <SectionDefault>
      <SectionHeader header={header} subHeader={subHeader} />

      <div className="mb-12 grid grid-cols-2 gap-x-16 gap-y-24">
        <PricingCard plans={pricingPlans} />
      </div>

      <div>
        <aside className="mb-24 text-center text-base text-accent-400">
          {footer}
        </aside>
      </div>

      <div className="grid grid-cols-4 gap-x-16 gap-y-24">
        <FeaturesCard features={featuresContent} />
      </div>
    </SectionDefault>
  );
}
