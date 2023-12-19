const { Wishlist } = require("../model/wishlist");
const { sendJsonResponse } = require("../utils/helper");

const addToWhishList = async (request, response) => {
	try {
		const payload = request.body;
		const user = request.jwtPayload;
		if (!payload?.product) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const wishlist = new Wishlist({ ...payload, user: user.userID });

		const doc = await wishlist.save();
		const result = await Wishlist.populate(doc, { path: "product" });

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Product Added::success", result);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const fetchWishListByUser = async (request, response) => {
	try {
		const { userID } = request?.jwtPayload;
		if (!userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const wishlistItems = await Wishlist.find({ user: userID }).populate({ path: "product" });
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Get wishlist::success", wishlistItems);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

removeFromWishlist = async (request, response) => {
	try {
		const { id } = request.query;
		const { userID } = request?.jwtPayload;

		if (!id && userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}
		const deletedWishlistItem = await Wishlist.findByIdAndDelete(id);
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record delete::success", deletedWishlistItem);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

module.exports = {
	addToWhishList,
	fetchWishListByUser,
	removeFromWishlist,
};
