import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAsync } from "../../actions/categories";

const initialState = {
	categories: [],
	status: "idle",
};
export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCategoriesAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getCategoriesAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.categories = action?.payload || [];
			});
	},
});

export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;
