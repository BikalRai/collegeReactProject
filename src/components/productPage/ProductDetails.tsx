import { NavLink, Outlet, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div className='mt-8'>
      <nav className='flex items-center gap-5 product__links font-semibold'>
        <NavLink to={`/shop/${productId}/description`}>Description</NavLink>
        <NavLink to={`/shop/${productId}/reviews`}>Reviews</NavLink>
      </nav>
      <div className='mt-12'>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductDetails;
