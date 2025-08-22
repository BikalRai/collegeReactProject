import type { StarFuncType } from "../../utilities/types/appTypes";
import { FaRegStar, FaStar } from "react-icons/fa";

const Star = ({ onRate, onHoverIn, onHoverOut, full }: StarFuncType) => {
  return (
    <div
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className='cursor-pointer transition-colors hover:text-amber-300'
    >
      {full ? (
        <FaStar className='h-5 w-5 text-amber-400' />
      ) : (
        <FaRegStar className=' h-5 w-5' />
      )}
    </div>
  );
};

export default Star;
