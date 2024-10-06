import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

export default function List({ lists }) {
  return (
    <ul className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4">
      {lists.map((list, index) => (
        <li
          key={index}
          className="flex gap-2 text-base sm:gap-3 md:gap-2 lg:text-lg xl:gap-4"
        >
          {list === "unavailable" ? (
            <IoCloseOutline className="h-6 w-6 text-primary-500 xl:h-8 xl:w-8" />
          ) : (
            <>
              <IoCheckmarkOutline className="h-6 w-6 text-primary-500 xl:h-8 xl:w-8" />
              <span>{list}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
