import Link from "next/link";
import SectionDefault from "../_components/SectionDefault";
import SectionHeader from "../_components/SectionHeader";
import List from "../_components/List";
import MealCard from "../_components/MealCard";
import { mealsContent } from "../_content/content";

export default function Meals() {
  const { header, subHeader, headerList, diets, meals, link } = mealsContent;
  return (
    <SectionDefault>
      <div className="text-center">
        <SectionHeader header={header} subHeader={subHeader} />
      </div>

      <div className="mb-12 grid grid-cols-3 gap-16">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}

        <div>
          <h3 className="mb-8 text-3xl font-bold leading-none text-accent-500">
            {headerList}
          </h3>
          <List lists={diets} />
        </div>
      </div>

      <div className="text-center">
        <Link
          href="#"
          className="inline-block border-b border-solid border-current pb-[1px] text-lg text-primary-500 transition-all duration-200 hover:border-transparent hover:text-primary-600"
        >
          {link}
        </Link>
      </div>
    </SectionDefault>
  );
}
