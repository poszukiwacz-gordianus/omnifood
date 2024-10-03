import { IoCheckmarkOutline } from "react-icons/io5";

export default function DietList({ list }) {
  return (
    <ul className="flex flex-col gap-4">
      {list.map((diet) => (
        <li key={diet} className="flex items-center gap-4 text-lg">
          <IoCheckmarkOutline className="h-8 w-8 text-primary-500" />
          <span>{diet}</span>
        </li>
      ))}
    </ul>
  );
}
