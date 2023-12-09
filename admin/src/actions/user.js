import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const loginUserOrderAsync = createAsyncThunk("user/loginUserOrder", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.loginUserOrder(formData);
		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const loginUserAsync = createAsyncThunk("user/loginUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.getLoginUser(formData);
		if (response) {
			return response.payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const updateUserAsync = createAsyncThunk("user/updateUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.updateUser(formData);
		if (payload) {
			notify("success", "Record updated::successfully");
			return payload;
		}
	} catch (error) {
		if (error?.message) notify("warning", error?.message ? error.message : "Invalid Login Credentials!");
	}
});
