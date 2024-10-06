import Image from "next/image";
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";

export default function MealCard({
  meal: { mealImage, meal, categories, properties },
}) {
  const { calories, nutriScore, rating, reviews } = properties;
  return (
    <div className="overflow-hidden rounded-xl shadow-[0_1.5rem_3rem_rgba(0,0,0,0.075)] transition-all duration-[400ms] ease-in-out hover:-translate-y-2 hover:shadow-[0_2rem_4rem_rgba(0,0,0,0.06)]">
      <Image src={mealImage} alt={meal} className="w-full" />

      <div className="p-6 md:p-5 xl:p-12 xl:pt-8">
        <div className="flex gap-2 xl:mb-3 xl:mt-6">
          {categories.map((category) => (
            <span
              key={category.category}
              style={{ backgroundColor: category.tagColor }}
              className={`mb-2 inline-block rounded-full px-1 text-xs font-medium text-accent-500 md:text-sm lg:px-2`}
            >
              {category.category}
            </span>
          ))}
        </div>

        <p className="mb-4 text-lg font-semibold text-accent-500 md:text-base lg:mb-8 lg:text-2xl">
          {meal}
        </p>

        <ul className="flex flex-col gap-2 lg:gap-5 lg:text-lg">
          <li className="flex items-center gap-4">
            <IoFlameOutline className="h-5 w-5 text-primary-500 lg:h-6 lg:w-6" />
            <span>
              <span className="font-medium">{calories}</span> calories
            </span>
          </li>
          <li className="flex items-center gap-4">
            <IoRestaurantOutline className="h-5 w-5 text-primary-500 lg:h-6 lg:w-6" />
            <span>
              nutriScore &reg; <span className="font-medium">{nutriScore}</span>
            </span>
          </li>
          <li className="flex items-center gap-4">
            <IoStarOutline className="h-5 w-5 text-primary-500 lg:h-6 lg:w-6" />
            <span>
              <span className="font-medium">{rating}</span> rating ({reviews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
