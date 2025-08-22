import type { FooterHeaderType } from "../../utilities/types/appTypes";

const ProductSectionHeader = ({ title }: FooterHeaderType) => {
  return <h3 className='text-2xl font-bold'>{title}</h3>;
};

export default ProductSectionHeader;
