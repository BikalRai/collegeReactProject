import { useState } from "react";
import type { StarRatingType } from "../../utilities/types/appTypes";
import Star from "./Star";

const StarRating: React.FC<StarRatingType> = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);

  const handleRate = (rating: number) => {
    setRating(rating);
  };

  return (
    <div>
      <div className='flex items-center gap-1'>
        {Array.from({ length: maxRating }, (_, i) => (
          <div>
            <Star
              key={i}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onRate={() => handleRate(i + 1)}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
            />
          </div>
        ))}
      </div>

      <p className='hidden'>{rating || ""}</p>
      <p className='hidden'>{tempRating || ""}</p>
    </div>
  );
};

export default StarRating;
