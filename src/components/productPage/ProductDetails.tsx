import { NavLink, Outlet } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className='mt-8'>
      <nav className='flex items-center gap-5 product__links'>
        <NavLink to='description'>Description</NavLink>
        <NavLink to='reviews'>Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductDetails;
