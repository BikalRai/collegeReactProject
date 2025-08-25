import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductTypes } from "../utilities/types/productType";

interface ProductState {
  products: ProductTypes[];
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  successMessage: null,
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
      state.successMessage = "Product added successfully!";
    },

    addProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
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
      state.successMessage = "Product updated successfully!";
    },
    updateProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
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
      state.successMessage = "Product deleted successfully";
    },
    deleteProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.successMessage = null;
    },
    clearSuccessMessage(state) {
      state.successMessage = null;
    },
    clearError(state) {
      state.error = null;
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
  clearSuccessMessage,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
