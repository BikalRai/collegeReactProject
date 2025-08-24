import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { ProductTypes } from "../utilities/types/productType";
import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

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
  ProductTypes[],
  void,
  { rejectValue: string }
>("product/fetchProducts", async (_, thunkApi) => {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data as ProductTypes[];
  } catch (error: unknown) {
    let message = "Failed to fetch products";

    if (error instanceof Error) {
      message = error.message;
    }

    return thunkApi.rejectWithValue(message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts(state, action: PayloadAction<ProductTypes[]>) {
      state.products = action.payload;
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
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setAllProducts } = productSlice.actions;
export default productSlice.reducer;
