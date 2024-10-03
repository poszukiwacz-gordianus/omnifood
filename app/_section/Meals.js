import MealCard from "../_components/MealCard";
import { mealsContent } from "../_content/content";

export default function Meals() {
  const { header, subHeader, meals } = mealsContent;
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-2">
        <span className="mb-4 block text-lg font-medium uppercase tracking-wide text-primary-600">
          {subHeader}
        </span>
        <h2 className="mb-24 text-5xl font-bold leading-none text-accent-500">
          {header}
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-16 px-2">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
        <div>List of diets</div>
      </div>
    </section>
  );
}
