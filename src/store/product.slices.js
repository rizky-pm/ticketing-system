import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../api';

const initialState = {
  isFetching: false,
  products: [],
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    return await getAllProducts();
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isFetching = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isFetching = false;
      state.products = action.payload.data.datas;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
