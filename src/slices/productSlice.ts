import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type {
  CreateProductPayload,
  DeleteProductPayload,
  ProductTypes,
  UpdateProductPayload,
} from "../utilities/types/productType";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

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

// async thunk for fetching product
export const fetchProducts = createAsyncThunk<
  ProductTypes[], // Return type
  void, // Argument type (void means no arguments)
  { rejectValue: string } // ThunkAPI config
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);

    return res.data;
  } catch (error) {
    // Fix 1: Proper axios error handling
    if (axios.isAxiosError(error)) {
      // Handle axios-specific errors
      const message =
        error.response?.data?.message ||
        error.message ||
        "Network error occurred";
      return rejectWithValue(message);
    }
    // Handle other types of errors
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch products"
    );
  }
});

export const addProduct = createAsyncThunk<
  ProductTypes,
  CreateProductPayload,
  { rejectValue: string }
>("products/addProduct", async (productData, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${BASE_URL}/products`, productData);
    return res.data;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to add Product"
    );
  }
});

export const updateProduct = createAsyncThunk<
  ProductTypes,
  UpdateProductPayload,
  { rejectValue: string }
>(
  "products/updateProduct",
  async ({ productId, data }, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${BASE_URL}/products/${productId}`, data);

      return res.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to update product"
      );
    }
  }
);

export const deleteProduct = createAsyncThunk<
  ProductTypes,
  DeleteProductPayload,
  { rejectValue: string }
>("products/deleteProduct", async ({ productId }, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`${BASE_URL}/products/${productId}`);

    return res.data && { message: "deleted Product" };
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to delete product"
    );
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<ProductTypes[]>) {
      state.products = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setAllProducts, clearError } = productSlice.actions;

export default productSlice.reducer;
