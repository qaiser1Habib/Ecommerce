import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getCategoriesAsync = createAsyncThunk("category/addToCart", async (notify, { dispatch }) => {
	try {
		const { payload } = await api.getCategories();
		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
