import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const addToWishListAsync = createAsyncThunk("wishlist/addToWishList", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.addToWishList(formData);
		if (payload) {
			notify("success", "Product Added to Wishlist");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const fetchWishlistByUserAsync = createAsyncThunk(
	"wishlist/fetchWishlistByUser",
	async ({ formData, notify }, { dispatch }) => {
		try {
			const response = await api.fetchWishlistByUser(formData);
			if (response) {
				return response.payload;
			}
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	}
);

export const removeFromWishlistAsync = createAsyncThunk("wishlist/removeFromWishlist", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.removeFromWishlist(formData);
		if (response) {
			notify("success", "Product Removed");
			return response.payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
