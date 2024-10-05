import { Fragment } from "react";
import Steps from "../_components/Steps";
import SectionHeader from "../_components/SectionHeader";
import { howItWorksContent } from "../_content/content";
import SectionDefault from "../_components/SectionDefault";

export default function HowItWorks() {
  const { header, subHeader, stepsContent } = howItWorksContent;
  return (
    <SectionDefault>
      <SectionHeader header={header} subHeader={subHeader} />

      <Steps>
        {stepsContent.map((step, index) => (
          <Fragment key={step.step}>
            {!!(index % 2) ? (
              <Steps.StepImage image={step.image} alt={step.alt} />
            ) : null}

            <Steps.StepInformations
              step={step.step}
              header={step.header}
              description={step.description}
            />

            {!(index % 2) ? (
              <Steps.StepImage image={step.image} alt={step.alt} />
            ) : null}
          </Fragment>
        ))}
      </Steps>
    </SectionDefault>
  );
}
