import Steps from "./Steps";
import { stepsContent } from "../_content/content";
import { Fragment } from "react";

export default function HowItWorks() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-2">
          <span className="mb-4 block text-lg font-medium uppercase tracking-wide text-primary-600">
            How it works
          </span>
          <h2 className="mb-24 text-5xl font-bold leading-none text-accent-500">
            Your daily dose of health in 3 simple steps
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
