import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ProductTypes } from "../utilities/types/productType";
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
