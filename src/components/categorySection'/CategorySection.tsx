import { CiDesktopMouse1 } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { LuMonitor } from "react-icons/lu";
import { PiOfficeChair } from "react-icons/pi";
import type { CategoryTypes } from "../../utilities/types/categoryTypes";
import CategoryCard from "./CategoryCard";

const categories: CategoryTypes[] = [
  {
    id: 1,
    title: "Peripherals",
    icon: <CiDesktopMouse1 className='w-12 h-12 stroke-1' />,
    path: "/shop/peripherals",
  },
  {
    id: 2,
    title: "Visuals",
    icon: <LuMonitor className='w-12 h-12 stroke-1' />,
    path: "/shop/visuals",
  },
  {
    id: 3,
    title: "Power Core",
    icon: <GiProcessor className='w-12 h-12 stroke-1' />,
    path: "/shop/power",
  },
  {
    id: 4,
    title: "Comfort Gear",
    icon: <PiOfficeChair className='w-12 h-12 stroke-1' />,
    path: "/shop/comfort",
  },
];

const CategorySection = () => {
  return (
    <div className=' grid grid-cols-2 justify-items-center md:flex md:justify-center md:items-center gap-20 mt-20'>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategorySection;
