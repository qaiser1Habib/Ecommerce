const { Order } = require("../model/order");
const { sendJsonResponse } = require("../utils/helper");

const createOrder = async (request, response) => {
	const payload = request.body;

	if (!payload?.items || !payload?.userID) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}
	const order = new Order({ ...payload });
	try {
		console.log(payload);
		const result = await order.save();

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Order Placed::success", result);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const OrdersByUser = async (request, response) => {
	const payload = request.query;
	console.log(payload);
	if (!payload?.userID) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}

	try {
		const order = await Order.find({ userID: payload.userID });

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "user Order::success", order);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

module.exports = {
	createOrder,
	OrdersByUser,
};
