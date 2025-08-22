import PrimaryButtonNoGlow from "../button/PrimaryButtonNoGlow";
import ProductReviewTextarea from "./ProductReviewTextarea";
import ProductSectionHeader from "./ProductSectionHeader";

const ProductWriteReview = () => {
  return (
    <div className='mt-16 grid gap-5'>
      <ProductSectionHeader title='Write a Review' />
      <div>
        <p>What do you like about the Product?</p>
        <div>⭐⭐⭐⭐⭐</div>
      </div>
      <ProductReviewTextarea
        title='Review Title'
        placeholderText='Review Title here'
        textRow={1}
      />
      <ProductReviewTextarea
        title='Review Content'
        placeholderText='Write your review here'
        textRow={10}
      />

      <PrimaryButtonNoGlow btnText='Submit Review' />
    </div>
  );
};

export default ProductWriteReview;
