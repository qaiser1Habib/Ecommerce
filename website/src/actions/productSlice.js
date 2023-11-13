import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const fetchAllProductsAsync = createAsyncThunk("product/fetchAllProducts", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.fetchAllProducts(formData);

		if (response) {
			const { totalDocs, payload } = response;
			return { totalDocs, products: payload };
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const fetchProductByIdAsync = createAsyncThunk("product/fetchByProducts", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.fetchByProducts(formData);

		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
