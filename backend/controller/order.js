const { Order } = require("../model/order");
const { sendJsonResponse } = require("../utils/helper");

const createOrder = async (request, response) => {
	const payload = request.body;

	if (!payload?.items || !payload?.userID) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}
	const order = new Order({ ...payload });
	try {
		const result = await order.save();

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Order Placed::success", result);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const OrdersByUser = async (request, response) => {
	try {
		const payload = request.jwtPayload;
		if (!payload?.userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const order = await Order.find({ userID: payload.userID });

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "user Order::success", order);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};
const fetchAllOrders = async (request, response) => {
	try {
		const docs = await Order.find().exec();
		const totalDocs = await Order.countDocuments();

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Records Found!", docs, totalDocs);
	} catch (error) {
		console.error("Error:", error);
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error occurred!", {
			error: error.message || error,
		});
	}
};

const orderUpdate = async (request, response) => {
	try {
		const payload = request.body;

		if (!payload.id || !payload.userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const OrderDetail = await Order.findByIdAndUpdate(payload.id, payload, {
			new: true,
		});

		if (!OrderDetail) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.NOT_FOUND, false, "Details not found", null);
		}

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated successfully", OrderDetail);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

module.exports = {
	createOrder,
	OrdersByUser,
	fetchAllOrders,
	orderUpdate,
};
