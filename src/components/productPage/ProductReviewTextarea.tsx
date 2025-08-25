import type { TextareaType } from "../../utilities/types/appTypes";

const ProductReviewTextarea = ({
  title,
  placeholderText,
  value,
  textRow,
  onChange,
}: TextareaType) => {
  return (
    <div className='flex flex-col gap-2'>
      <p>{title}</p>
      <textarea
        placeholder={placeholderText}
        className='resize-none outline-0 border border-muted rounded-2xl w-full p-2'
        rows={textRow}
        value={typeof value === "string" ? value : ""}
        onChange={(e) => {
          // Modify the event to include name if needed
          Object.defineProperty(e.target, "name", {
            value: "description",
            writable: false,
          });
          onChange(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default ProductReviewTextarea;
