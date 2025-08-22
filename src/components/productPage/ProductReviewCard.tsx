import { AiOutlineLike } from "react-icons/ai";

const ProductReviewCard = () => {
  return (
    <div className='flex gap-8 mt-6 pb-4 border-b border-b-muted'>
      <div className='h-12 w-12 border border-primary rounded-full'>
        <img src='' alt='avatar' />
      </div>
      <div className='grid gap-5'>
        <div>
          <h4 className='text-lg font-medium'>User Name</h4>
          <p className='text-muted'>3 Days ago</p>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
        <h5 className='text-sm'>Review Title</h5>
        <p className='text-xs'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil cum
          explicabo rerum illo ducimus consequatur maxime fugit odio. Deleniti,
          architecto.
        </p>
        <div>
          <div className='flex items-center gap-2 cursor-pointer transition-colors hover:text-primary'>
            <AiOutlineLike />
            <span>Count</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewCard;
