// import axios from "axios";

// export async function fetchAllProducts(formData) {
// 	let queryString = "";
// 	for (let key in formData) {
// 		queryString += `${key}=${formData[key]}&`;
// 	}
// 	console.log(formData);
// 	try {
// 		const response = await axios.get(`http://localhost:3000/products?${queryString}`);

// 		if (response.status !== 200) {
// 			throw new Error("Failed to fetch product");
// 		}

// 		const data = response.data;
// 		const totalItems = await response.headers.get("X-Total-Count");

// 		return { data: { product: data, totalItems: +totalItems } };
// 	} catch (error) {
// 		console.error("Error fetching product:", error);
// 		throw error;
// 	}
// }

// import { getToken } from "./auth";
import axiosHandler from "./axiosHandler";

let defaultHeaders = {};
let multipartHeaders = {};

// async function refreshAuthToken() {
// 	const authToken = await getToken();

// 	defaultHeaders = { Authorization: `Bearer ${authToken}`, "ngrok-skip-browser-warning": "69420" };
// 	multipartHeaders = { ...defaultHeaders, "Content-Type": "multipart/form-data" };
// }

const apiMethods = {
	get: async (endpoint, formData) => {
		// await refreshAuthToken();
		return axiosHandler.get(endpoint, { params: formData, headers: defaultHeaders });
	},
	post: async (endpoint, formData, isMultipart = false, uploadProgress) => {
		// await refreshAuthToken();
		return axiosHandler.post(endpoint, formData, {
			headers: isMultipart ? multipartHeaders : defaultHeaders,
			onUploadProgress: uploadProgress,
		});
	},
	put: async (endpoint, formData, isMultipart = false) => {
		// await refreshAuthToken();
		return axiosHandler.put(endpoint, formData, { headers: isMultipart ? multipartHeaders : defaultHeaders });
	},
	delete: async (endpoint, formData) => {
		// await refreshAuthToken();
		return axiosHandler.delete(endpoint, { params: formData, headers: defaultHeaders });
	},
};

export const fetchAllProducts = (formData) => apiMethods.get("/products", formData);
