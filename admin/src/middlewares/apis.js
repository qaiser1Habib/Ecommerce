import { getToken } from "./auth";
import axiosHandler from "./axiosHandler";

let defaultHeaders = {};
let multipartHeaders = {};

async function refreshAuthToken() {
	const authToken = await getToken();

	defaultHeaders = { Authorization: `Bearer ${authToken}`, "ngrok-skip-browser-warning": "69420" };
	multipartHeaders = { ...defaultHeaders, "Content-Type": "multipart/form-data" };
}

const apiMethods = {
	get: async (endpoint, formData) => {
		await refreshAuthToken();
		return axiosHandler.get(endpoint, { params: formData, headers: defaultHeaders });
	},
	post: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.post(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	put: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.put(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	patch: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		await refreshAuthToken();
		return axiosHandler.patch(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	delete: async (endpoint, formData) => {
		await refreshAuthToken();
		return axiosHandler.delete(endpoint, { params: formData, headers: defaultHeaders });
	},
};

export const fetchAllProducts = (formData) => apiMethods.get("/products", formData);
export const fetchProductById = (formData) => apiMethods.get("/products", formData);
export const createProduct = (formData, uploadProgress) => apiMethods.post("/products", formData, true, uploadProgress);
export const updateProduct = (formData, uploadProgress) => apiMethods.patch("/products", formData, true, uploadProgress);
export const deleteProduct = (formData) => apiMethods.patch("/products", formData);
export const fetchCartByUser = (formData) => apiMethods.get("/cart", formData);

export const registerUser = (formData) => apiMethods.post("/user/signup", formData, true);
export const loginUser = (formData) => apiMethods.post("/user", formData);
export const getLoginUser = (formData) => apiMethods.get("/user", formData);
export const updateUser = (formData) => apiMethods.patch("/user", formData);
export const addToCart = (formData) => apiMethods.post("/cart", formData);
export const removeFromCart = (formData) => apiMethods.delete("/cart", formData);
export const updateCartItem = (formData) => apiMethods.patch("/cart", formData);

export const createOrder = (formData) => apiMethods.post("/order", formData);
export const fetchAllOrders = (formData) => apiMethods.get("/order", formData);
export const orderUpdate = (formData) => apiMethods.patch("/order", formData);
export const loginUserOrder = (formData) => apiMethods.get("/order/own", formData);
