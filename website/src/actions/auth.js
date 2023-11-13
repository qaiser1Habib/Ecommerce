import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const registerUserAsync = createAsyncThunk("auth/registerUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.registerUser(formData);

		if (payload) {
			notify("success", "User successfully Registered. Now you can login");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const loginUser = createAsyncThunk("auth/loginUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.loginUser(formData);
		if (payload) {
			// await setToken(payload.token);
			notify("success", "Login successful");
			return payload;
		}
	} catch (error) {
		if (error?.message) notify("warning", error?.message ? error.message : "Invalid Login Credentials!");
	}
});

export const updateUserAsync = createAsyncThunk("auth/updateUser", async ({ formData, notify }, { dispatch }) => {
	try {
		const {payload} = await api.updateUser(formData);
		if (payload) {
			// await setToken(payload.token);
			notify("success", "Address Added successful");
			return payload;
		}
	} catch (error) {
		if (error?.message) notify("warning", error?.message ? error.message : "Invalid Login Credentials!");
	}
});
