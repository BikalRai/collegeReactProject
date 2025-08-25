import { useNavigate } from "react-router-dom";
import type { ProductTypes } from "../../utilities/types/productType";
import TertiaryButton from "../button/TertiaryButton";
import { useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
} from "../../slices/productSlice";
import axios from "axios";
import { toast } from "react-toastify";

interface TableProps {
  products: ProductTypes[];
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminProductTable = ({ products }: TableProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleIsOpen = (id: string) => {
    setSelectedProductId(id);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProductId(null);
    setIsOpen(false);
  };

  const handleProductDelete = async () => {
    if (!selectedProductId) return;
    dispatch(deleteProductRequest());

    try {
      const res = await axios.delete(
        `${BASE_URL}/products/${selectedProductId}`
      );

      if (res.status === 200) {
        dispatch(deleteProductSuccess(selectedProductId));
        handleClose();
        toast.success("Delete product successfully");
      }
    } catch (error) {
      dispatch(deleteProductFailure("Failed to delete product"));
      toast.error("Failed to delete product");
      handleClose();
      console.error(error);
    }
  };

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
            <>
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
                  <div
                    className='w-fit'
                    onClick={() => handleIsOpen(String(product.id))}
                  >
                    <TertiaryButton btnText='Delete' />
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Modal
        open={isOpen}
        onClose={() => handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Are you sure you want to delete?
          </Typography>
          <div className='mt-6'>
            <TertiaryButton btnText='Close' clickFunction={handleClose} />
            <TertiaryButton
              btnText='Delete'
              clickFunction={handleProductDelete}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminProductTable;
