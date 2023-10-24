import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchProductById} from './productAPI';

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null,
};


export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);





export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSelectedProduct:(state)=>{
      state.selectedProduct = null
    }
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchProductsByFiltersAsync.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
      //   state.status = 'idle';
      //   state.products = action.payload.products;
      //   state.totalItems = action.payload.totalItems;
      // })

  },
});

export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;


export default productSlice.reducer;
