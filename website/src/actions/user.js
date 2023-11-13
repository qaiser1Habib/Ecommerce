import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const loginUserOrderAsync = createAsyncThunk("user/loginUserOrder", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.loginUserOrder(formData);
		if (payload) {
			// await setToken(payload.token);
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
