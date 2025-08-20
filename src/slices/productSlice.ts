import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductTypes } from "../utilities/types/productType";

interface ProductState {
  products: ProductTypes[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<ProductTypes[]>) {
      state.products = action.payload;
    },
  },
});

export const { setAllProducts } = productSlice.actions;
export default productSlice.reducer;
