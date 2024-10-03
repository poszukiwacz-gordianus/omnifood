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
    <div className="overflow-hidden rounded-xl shadow-[0_1.5rem_3rem_rgba(0,0,0,0.075)]">
      <Image src={mealImage} alt={meal} className="w-full" />

      <div className="p-12 pt-8">
        <div className="mb-3 mt-6 flex gap-2">
          {categories.map((category) => (
            <span
              key={category.category}
              style={{ backgroundColor: category.tagColor }}
              className={`inline-block rounded-full px-2 text-sm font-medium text-accent-500`}
            >
              {category.category}
            </span>
          ))}
        </div>

        <p className="mb-8 text-2xl font-semibold text-accent-500">{meal}</p>

        <ul className="flex flex-col gap-5 text-lg">
          <li className="flex items-center gap-4">
            <IoFlameOutline className="h-6 w-6 text-primary-500" />
            <span>
              <span className="font-medium">{calories}</span> calories
            </span>
          </li>
          <li className="flex items-center gap-4">
            <IoRestaurantOutline className="h-6 w-6 text-primary-500" />
            <span>
              nutriScore &reg; <span className="font-medium">{nutriScore}</span>
            </span>
          </li>
          <li className="flex items-center gap-4">
            <IoStarOutline className="h-6 w-6 text-primary-500" />
            <span>
              <span className="font-medium">{rating}</span> rating ({reviews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
