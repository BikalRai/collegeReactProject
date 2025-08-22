import { LuShoppingBag, LuTruck } from "react-icons/lu";

const ProductShipping = () => {
  return (
    <div className='border border-muted mt-8 grid gap-5 p-4 rounded-2xl'>
      <div>
        <div className='font-bold text-lg flex items-center gap-5'>
          <LuTruck />
          <span>Free Delivery</span>
        </div>
        <p className='text-muted text-sm'>
          Enter your Postal code for Delivery Availability
        </p>
      </div>
      <hr />
      <div className='font-bold text-lg flex items-center gap-5'>
        <div>
          <div className='font-bold text-lg flex items-center gap-5'>
            <LuShoppingBag />
            <span>Return Delivery</span>
          </div>
          <p className='text-muted text-sm'>
            Free 30 days Delivery Return. Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShipping;
