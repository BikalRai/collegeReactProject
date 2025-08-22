import ProductReviewCard from "./ProductReviewCard";
import ProductSectionHeader from "./ProductSectionHeader";
import ProductWriteReview from "./ProductWriteReview";

const ProductReviews = () => {
  return (
    <div>
      <div className='flex flex-col gap-6'>
        <ProductSectionHeader title='Customer Feedback' />
        <div className='md:flex'>
          <div className='grid gap-2'>
            <h1 className='text-6xl font-bold'>4.8</h1>
            <div>⭐⭐⭐⭐⭐</div>
            <p className='text-muted'>Product Rating</p>
          </div>
          <div className='hidden md:block'>star ratings</div>
        </div>
        <div>
          <ProductSectionHeader title='Reviews' />
          <div>
            <ProductReviewCard />
            <ProductWriteReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
