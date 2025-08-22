import type { TextareaType } from "../../utilities/types/appTypes";

const ProductReviewTextarea = ({
  title,
  placeholderText,
  textRow,
}: TextareaType) => {
  return (
    <div className='flex flex-col gap-2'>
      <p>{title}</p>
      <textarea
        placeholder={placeholderText}
        className='resize-none outline-0 border border-muted rounded-2xl w-full p-2'
        rows={textRow}
      ></textarea>
    </div>
  );
};

export default ProductReviewTextarea;
