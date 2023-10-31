import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

// import { fetchAllProducts } from "./API";

// export const fetchAllProductsAsync = createAsyncThunk("product/fetchAllProducts", async ({formData}) => {
// 	const response = await api.fetchAllProducts(formData);
// 	return response.data;
// });

export const fetchAllProductsAsync = createAsyncThunk("product/fetchAllProducts", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.fetchAllProducts(formData);
		if (payload) return payload;
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
