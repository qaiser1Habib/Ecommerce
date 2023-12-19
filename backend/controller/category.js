const { Category } = require("../model/category");
const { User } = require("../model/user");
const { sendJsonResponse } = require("../utils/helper");

fetchAllCategories = async (request, response) => {
	try {
		const category = await Category.find({}).exec();
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Get category::success", category);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};
createCategory = async (request, response) => {
	try {
		const payload = request.body;
		const { userID: authenticatingUserID } = request.jwtPayload;

		if (!payload.label) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!");
		}
		const authenticatingDBUser = await User.findOne({ _id: authenticatingUserID });

		if (authenticatingDBUser?.role === "admin") {
			const category = new Category({ ...payload });
			const newCategory = await category.save();

			if (newCategory) {
				return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record created::success", newCategory);
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
	fetchAllCategories,
	createCategory,
};
