"use client";

import { Fragment } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  Steps,
  SectionHeader,
  SectionDefault,
  Container,
} from "@/app/_components/Components";
import { howItWorksContent } from "../_content/content";

export default function HowItWorks() {
  const { header, subHeader, stepsContent } = howItWorksContent;
  const { width } = useWindowSize();

  return (
    <SectionDefault>
      <Container>
        <SectionHeader header={header} subHeader={subHeader} />

        <Steps>
          {stepsContent.map((step, index) => (
            <Fragment key={step.step}>
              {!!(index % 2) || width < 544 ? (
                <Steps.StepImage image={step.image} alt={step.alt} />
              ) : null}

              <Steps.StepInformations
                step={step.step}
                header={step.header}
                description={step.description}
              />

              {!(index % 2) && width >= 544 ? (
                <Steps.StepImage image={step.image} alt={step.alt} />
              ) : null}
            </Fragment>
          ))}
        </Steps>
      </Container>
    </SectionDefault>
  );
}
