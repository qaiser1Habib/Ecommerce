import { createSlice } from "@reduxjs/toolkit";
import {
	addToCartAsync,
	fetchCartByUserAsync,
	removeFromCartAsync,
	resetCartAsync,
	updateCartItemAsync,
} from "../../actions/cart";

const initialState = {
	items: [],
	status: "idle",
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		clearSelectedProduct: (state) => {
			state.selectedProduct = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addToCartAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items.push(action?.payload);
			})
			.addCase(fetchCartByUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchCartByUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action?.payload || [];
			})
			.addCase(updateCartItemAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateCartItemAsync.fulfilled, (state, action) => {
				state.status = "idle";
				const index = state.items.findIndex((item) => item.id === action.payload.id);
				state.items[index] = action?.payload;
			})
			.addCase(removeFromCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(removeFromCartAsync.fulfilled, (state, action) => {
				state.status = "idle";
				const index = state.items.findIndex((item) => item.id === action?.payload?.id);
				state.items.splice(index, 1);
			})
			.addCase(resetCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(resetCartAsync.fulfilled, (state) => {
				state.status = "idle";
				state.items = [];
			});
	},
});

export const { clearSelectedProduct } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
