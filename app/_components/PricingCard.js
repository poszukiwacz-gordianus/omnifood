import Button from "./Button";
import List from "./List";

export default function PricingCard({ plans }) {
  return plans.map((plan, index) => (
    <div
      key={index}
      className={` ${
        plan.name === "Complete"
          ? "relative overflow-hidden bg-primary-100 p-12"
          : "justify-self-end border-2 border-solid border-primary-100 p-[46px]"
      } w-[70%] rounded-lg`}
    >
      <header className="mb-12 text-center">
        <p className="mb-8 text-lg font-semibold uppercase tracking-wider text-primary-600">
          {plan.name}
        </p>
        <p className="mb-4 text-6xl font-semibold text-accent-500">
          <span className="mr-2 text-3xl font-medium">$</span>
          {plan.price}
        </p>
        <p className="text-base text-accent-400">{plan.description}</p>
      </header>

      <List lists={plan.features} />

      <div className="mt-12 text-center">
        <Button>{plan.button}</Button>
      </div>

      {plan.name === "Complete" ? (
        <span className="absolute -right-[18%] top-[6%] rotate-45 bg-yellow-400 px-20 py-1 text-sm font-bold uppercase text-accent-500">
          Best value
        </span>
      ) : null}
    </div>
  ));
}
