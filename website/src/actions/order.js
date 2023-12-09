import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const createOrderAsync = createAsyncThunk("order/createOrder", async ({ formData, notify }, { dispatch }) => {
	try {
		console.log(formData)
		const  payload  = await api.createOrder(formData);
		if (payload) {
			notify("success", "Your Order Confirmed");
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
