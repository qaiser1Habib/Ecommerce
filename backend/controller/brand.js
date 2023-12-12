const { Brand } = require("../model/brand");
const { User } = require("../model/user");
const { sendJsonResponse } = require("../utils/helper");

fetchAllBrands = async (request, response) => {
	try {
		const brand = await Brand.find({}).exec();
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Get Brand::success", brand);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};
createBrand = async (request, response) => {
	try {
		const payload = request.body;
		const { userID: authenticatingUserID } = request.jwtPayload;

		if (!payload.label) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!");
		}
		const authenticatingDBUser = await User.findOne({ _id: authenticatingUserID });

		if (authenticatingDBUser?.role === "admin") {
			const brand = new Brand({ ...payload });
			const newBrand = await brand.save();

			if (newBrand) {
				return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record created::success", newBrand);
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record created::failure", null);
			}
		} else {
			return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Permission denied!", null);
		}
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

module.exports = {
	fetchAllBrands,
	createBrand,
};
