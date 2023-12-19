import { createSlice } from "@reduxjs/toolkit";
import { addToWishListAsync, fetchWishlistByUserAsync, removeFromWishlistAsync } from "../../actions/wishlist";

const initialState = {
	items: [],
	status: "idle",
};
export const wishlistSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearSelectedProduct: (state) => {
			state.selectedProduct = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToWishListAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addToWishListAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items.push(action?.payload);
			})
			.addCase(fetchWishlistByUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchWishlistByUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action?.payload || [];
			})
			.addCase(removeFromWishlistAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(removeFromWishlistAsync.fulfilled, (state, action) => {
				state.status = "idle";
				const index = state.items.findIndex((item) => item.id === action?.payload?.id);
				state.items.splice(index, 1);
			});
	},
});

export const { clearSelectedProduct } = wishlistSlice.actions;

export const selectWishlist = (state) => state.wishlist.items;

export default wishlistSlice.reducer;
