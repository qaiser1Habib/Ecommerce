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
export const fetchProductByIdAsync = createAsyncThunk("product/fetchProductById", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.fetchProductById(formData);

		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
export const createProductAsync = createAsyncThunk(
	"product/createProduct",
	async ({ formData, notify, uploadProgress }, { dispatch }) => {
		try {
			const { payload } = await api.createProduct(formData, uploadProgress);
			if (payload) {
				notify("success", "Product successfully Added.");
				return payload;
			}
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	}
);
export const updateProductAsync = createAsyncThunk(
	"product/updateProduct",
	async ({ formData, notify, uploadProgress }, { dispatch }) => {
		try {
			const { payload } = await api.updateProduct(formData, uploadProgress);
			notify("success", "Product successfully Updated.");
			if (payload) {
				return payload;
			}
		} catch (error) {
			dispatch(apiErrorHandler(error, notify));
		}
	}
);
export const deleteProductAsync = createAsyncThunk("product/deleteProduct", async ({ formData, notify }, { dispatch }) => {
	try {
		const { payload } = await api.deleteProduct(formData);
		notify("success", "Product successfully Removed.");
		if (payload) {
			return payload;
		}
	} catch (error) {
		dispatch(apiErrorHandler(error, notify));
	}
});
