const { Cart } = require("../model/cart");
const { sendJsonResponse } = require("../utils/helper");

const addToCart = async (request, response) => {
	try {
		const payload = request.body;
		const user = request.jwtPayload;

		if (!payload?.product) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const cart = new Cart({ ...payload, user: user.userID });

		const doc = await cart.save();
		const result = await Cart.populate(doc, { path: "product" });

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Product Added::success", result);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

fetchCartByUser = async (request, response) => {
	try {
		const { userID } = request?.jwtPayload;
		if (!userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const cartItems = await Cart.find({ user: userID }).populate({ path: "product" });
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Get Cart::success", cartItems);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

updateCartItem = async (request, response) => {
	try {
		const { id } = request.body;

		if (!id) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const cart = await Cart.findByIdAndUpdate(id, request.body, {
			new: true,
		});
		const result = await cart.populate("product");

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated::success", result);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

removeFromCart = async (request, response) => {
	try {
		const { id } = request.query;
		if (!id) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}
		const deletedCartItem = await Cart.findByIdAndDelete(id);
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record delete::success", deletedCartItem);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};
module.exports = {
	addToCart,
	fetchCartByUser,
	removeFromCart,
	updateCartItem,
};
