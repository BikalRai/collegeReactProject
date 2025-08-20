import type { CategoryTypes } from '../../utilities/types/categoryTypes';

interface CategoryPropsType {
  category: CategoryTypes;
}

const CategoryCard = ({ category }: CategoryPropsType) => {
  return (
    <div className="flex flex-col items-center gap-2 text-text-primary w-fit">
      <div className="bg-cardbg w-20 h-20 rounded-full flex justify-center items-center cursor-pointer transition hover:shadow-glow">
        {category.icon}
      </div>
      <p className="text-xs font-medium">{category.title}</p>
    </div>
  );
};

export default CategoryCard;
