// export function fetchProductById(id) {
// 	return new Promise(async (resolve) => {
// 		const response = await fetch("http://localhost:8080/products/" + id);
// 		const data = await response.json();
// 		resolve({ data });
// 	});
// }

export async function fetchProductById(id) {
	try {
		const response = await fetch("http://localhost:8080/products/" + id);
		if (!response.ok) {
			throw new Error("Failed to fetch product");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching product:", error);
		throw error;
	}
}
