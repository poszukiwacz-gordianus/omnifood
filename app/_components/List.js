import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

export default function List({ lists }) {
  return (
    <ul className="flex flex-col gap-4">
      {lists.map((list) => (
        <li key={list} className="flex items-center gap-4 text-lg">
          {list === "unavailable" ? (
            <IoCloseOutline className="h-8 w-8 text-primary-500" />
          ) : (
            <>
              <IoCheckmarkOutline className="h-8 w-8 text-primary-500" />
              <span>{list}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
