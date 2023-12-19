import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const getBrandsAsync = createAsyncThunk("brand/getBrands", async (notify, { dispatch }) => {
	try {
		const { payload } = await api.getBrands();
		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
