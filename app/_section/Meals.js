import Link from "next/link";
import {
  SectionDefault,
  SectionHeader,
  List,
  MealCard,
  Container,
} from "@/app/_components/Components";
import { mealsContent } from "../_content/content";

export default function Meals() {
  const { header, subHeader, headerList, diets, meals, link } = mealsContent;
  return (
    <SectionDefault id="meals">
      <Container>
        <div className="text-center">
          <SectionHeader header={header} subHeader={subHeader} />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 xl:gap-16">
          {meals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}

          <div className="flex flex-col items-center justify-center sm:col-span-full md:col-span-1 md:mt-0 md:items-start md:justify-start">
            <h3 className="mb-8 text-lg font-bold leading-none text-accent-500 lg:text-2xl xl:text-3xl">
              {headerList}
            </h3>
            <List lists={diets} />
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#"
            className="inline-block border-b border-solid border-current pb-[1px] text-sm text-primary-500 transition-all duration-200 hover:border-transparent hover:text-primary-600 lg:text-lg"
          >
            {link}
          </Link>
        </div>
      </Container>
    </SectionDefault>
  );
}
