import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const addToCartAsync = createAsyncThunk("cart/addToCart", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.addToCart(formData);
		if (payload) {
			notify("success", "Product Added to Cart");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const fetchCartByUserAsync = createAsyncThunk("cart/fetchCartByUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.fetchCartByUser(formData);
		if (response) {
			return response.payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const removeFromCartAsync = createAsyncThunk("cart/removeFromCart", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.removeFromCart(formData);
		if (response) {
			notify("success", "Product Removed");
			return response.payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const updateCartItemAsync = createAsyncThunk("cart/updateCartItem", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.updateCartItem(formData);
		if (response) {
			return response.payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const resetCartAsync = createAsyncThunk("cart/resetCart", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.fetchCartByUser(formData);
		let items = response.payload;
		for (let item of items) {
			await api.removeFromCart({ id: item.id });
		}
		return { status: "success" };
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
