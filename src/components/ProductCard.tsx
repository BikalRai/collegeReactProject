import { Link } from "react-router-dom";
import type { ProductTypes } from "../utilities/types/productType";
import PrimaryButtonNoGlow from "./button/PrimaryButtonNoGlow";
import SecondaryButtonNoGlow from "./button/SecondaryButtonNoGlow";

interface ProductCardType {
  product: ProductTypes;
}

const ProductCard = ({ product }: ProductCardType) => {
  return (
    <div className='bg-cardbg-light text-sm font-semibold text-muted grid gap-4 p-4 rounded-2xl'>
      <div className='rounded-xl overflow-hidden h-[208px]'>
        <img
          src={product.image}
          alt='Gaming keyboard'
          className='w-full h-full object-cover object-center'
        />
      </div>
      <div className='grid gap-2'>
        <h3 className='uppercase  text-cardbg'>{product.name}</h3>
        <h3>Gaming Keyboard</h3>
        <div>⭐⭐⭐⭐⭐</div>
        <p className='text-success'>In stock</p>
        <p className='flex items-center gap-2'>
          <span className='line-through'>Rs {product.price}</span>
          <span className='text-cardbg'>Rs {product.discountPrice}</span>
        </p>
        <div className='flex items-center gap-2'>
          <Link to=''>
            <SecondaryButtonNoGlow btnText='View Details' />
          </Link>
          <PrimaryButtonNoGlow btnText='Add to cart' />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
