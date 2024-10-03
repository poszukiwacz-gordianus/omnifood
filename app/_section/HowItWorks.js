import { Fragment } from "react";
import Steps from "../_components/Steps";
import { howItWorksContent } from "../_content/content";

export default function HowItWorks() {
  const { header, subHeader, stepsContent } = howItWorksContent;
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-2">
          <span className="mb-4 block text-lg font-medium uppercase tracking-wide text-primary-600">
            {subHeader}
          </span>
          <h2 className="mb-24 text-5xl font-bold leading-none text-accent-500">
            {header}
          </h2>
        </div>

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
      </section>
    </>
  );
}
