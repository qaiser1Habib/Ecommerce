import { createSlice } from "@reduxjs/toolkit";
import { getBrandsAsync } from "../../actions/brands.js";

const initialState = {
	brands: [],
	status: "idle",
};
export const brandSlice = createSlice({
	name: "brand",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getBrandsAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getBrandsAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.brands = action?.payload || [];
			});
	},
});

export const selectBrands = (state) => state.brand.brands;

export default brandSlice.reducer;
