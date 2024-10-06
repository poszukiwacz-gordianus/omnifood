import { Button, List } from "@/app/_components/Components";

export default function PricingCard({ plans }) {
  return plans.map((plan, index) => (
    <div
      key={index}
      className={` ${
        plan.name === "Complete"
          ? "relative overflow-hidden bg-primary-100 p-6 lg:p-12"
          : "items-stretch border-2 border-solid border-primary-100 p-[1.375rem] lg:justify-self-end lg:p-[2.875rem]"
      } rounded-xl sm:w-[60%] md:w-full lg:w-[90%] xl:w-[70%]`}
    >
      <header className="mb-12 text-center">
        <p className="mb-8 text-lg font-semibold uppercase tracking-wider text-primary-600">
          {plan.name}
        </p>
        <p className="mb-4 text-5xl font-semibold text-accent-500 lg:text-6xl">
          <span className="mr-2 text-3xl font-medium">$</span>
          {plan.price}
        </p>
        <p className="text-sm text-accent-400 lg:text-base">
          {plan.description}
        </p>
      </header>

      <List lists={plan.features} />

      <div className="mt-12 text-center">
        <Button>{plan.button}</Button>
      </div>

      {plan.name === "Complete" ? (
        <span className="absolute -right-[30%] top-[6%] rotate-45 bg-yellow-400 px-20 py-1 text-sm font-bold uppercase text-accent-500 sm:-right-[20%] sm:top-[8%] md:-right-[19.5%] md:top-[7.5%] lg:-right-[17%] lg:top-[6%]">
          Best value
        </span>
      ) : null}
    </div>
  ));
}

//-right-[18%] top-[6%]
