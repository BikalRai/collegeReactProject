import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductTypes } from "../utilities/types/productType";

interface ProductState {
  products: ProductTypes[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchAllProductsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAllProductsSuccess(state, action: PayloadAction<ProductTypes[]>) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAllProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    addProductSuccess(state, action: PayloadAction<ProductTypes>) {
      state.products.push(action.payload);
      state.loading = false;
      state.error = null;
    },

    addProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateProductSuccess(state, action: PayloadAction<ProductTypes>) {
      const found = state.products.findIndex((p) => p.id === action.payload.id);
      if (found !== -1) {
        state.products[found] = action.payload;
      }
      state.loading = false;
      state.error = null;
    },
    updateProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    deleteProductSuccess(state, action: PayloadAction<string>) {
      const found = state.products.findIndex((p) => p.id === action.payload);
      if (found !== -1) {
        state.products.splice(found, 1);
      }
      state.loading = false;
      state.error = null;
    },
    deleteProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchAllProductsRequest,
  fetchAllProductsSuccess,
  fetchAllProductsFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
