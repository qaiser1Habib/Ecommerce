import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProductsAsync, fetchProductByIdAsync } from "../../actions/productSlice";

const initialState = {
	products: [],
	singleProduct: {},
	totalItems: 0,
	brands: [],
	categories: [],
	status: "idle",
};
export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		clearSelectedProduct: (state) => {
			state.selectedProduct = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProductsAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.products = action?.payload?.products || [];
				state.totalItems = action?.payload?.totalDocs || 0;
			})
			.addCase(fetchProductByIdAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.singleProduct = action?.payload || {};
			});
	},
});

export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectProductDetail = (state) => state.product.singleProduct;
// export const selectBrands = (state) => state.product.brands;
// export const selectCategories = (state) => state.product.categories;
// export const selectProductById = (state) => state.product.selectedProduct;
// export const selectProductListStatus = (state) => state.product.status;

export default productSlice.reducer;
