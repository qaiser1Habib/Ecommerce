import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../middlewares/apis";
import { apiErrorHandler } from "./apiErrorHandler";

export const fetchAllOrdersAsync = createAsyncThunk("order/fetchAllOrders", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.fetchAllOrders(formData);

		if (response) {
			const { totalDocs, payload } = response;
			return { totalDocs, products: payload };
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});

export const orderUpdateAsync = createAsyncThunk("order/orderUpdate", async ({ formData, notify }, { dispatch }) => {
	try {
		const response = await api.orderUpdate(formData);

		if (response) {
			notify("success", "Order successfully Updated.");
			return response;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
