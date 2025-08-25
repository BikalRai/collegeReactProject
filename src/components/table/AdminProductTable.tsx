import { useNavigate } from "react-router-dom";
import type { ProductTypes } from "../../utilities/types/productType";
import TertiaryButton from "../button/TertiaryButton";

interface TableProps {
  products: ProductTypes[];
}

const AdminProductTable = ({ products }: TableProps) => {
  const navigate = useNavigate();

  return (
    <div className='overflow-x-auto rounded-2xl'>
      <table className='w-full border-collapse divide-y divide-muted '>
        <thead className='bg-cardbg'>
          <tr className='text-muted'>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Id
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Name
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[200px] truncate'>
              Price
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Discount Price
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Categories
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[200px] truncate'>
              Quantity
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              ImageUrls
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Reviews
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Rating
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Description
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider max-w-[150px] truncate'>
              Badges
            </th>
            <th className='px-6 py-3 text-center text-xs font-medium uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className='transition-colors bg-cardbg-light hover:bg-gray-300 cursor-pointer'
            >
              <td className='px-6 py-4 text-sm text-center font-medium text-gray-900'>
                {product.id}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500'>
                {product.name}
              </td>
              <td className='px-6 py-4 text-sm text-gray-500 max-w-[200px] truncate'>
                {product.price}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500'>
                {product.discountPrice}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[200px] truncate'>
                {product.categories}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.quantity}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.images.length}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.reviews.length}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.rating}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.description}
              </td>
              <td className='px-6 py-4 text-sm text-center text-gray-500 max-w-[150px] truncate'>
                {product.badge.length}
              </td>

              <td className='px-6 py-4 text-sm text-center font-medium flex flex-col gap-2 items-center '>
                <div
                  className='w-fit'
                  onClick={() => navigate(`/products/edit/${product.id}`)}
                >
                  <TertiaryButton btnText='Edit' />
                </div>
                <div className='w-fit'>
                  <TertiaryButton btnText='Delete' />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductTable;
