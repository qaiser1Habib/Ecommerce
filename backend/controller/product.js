const { Product } = require("../model/product");

exports.createProduct = async (req, res) => {
	const product = new Product(req.body);

	try {
		const doc = await product.save();
		res.status(200).json(doc);
	} catch (err) {
		res.status(400).json(err);
	}
};

const sendJsonResponse = (res, httpCode, status = false, message = "No Message To Show!", payload = null) => {
	return res.status(HTTP_STATUS_CODES.OK).json({
		httpCode,
		status,
		message,
		payload,
	});
};

exports.fetchAllProduct = async (req, res) => {
	const { page, limit, category, brand, sort, order } = req.query;

	if (!page || !limit) {
		return sendJsonResponse(res, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!");
	}

	let query = Product.find();

	if (category) {
		query = query.where("category").equals(category);
	}

	if (brand) {
		query = query.where("brand").equals(brand);
	}

	if (sort && order) {
		query = query.sort({ [sort]: order });
	}

	if (page && limit) {
		const pageSize = parseInt(limit);
		const pageNumber = parseInt(page);
		query = query.skip(pageSize * (pageNumber - 1)).limit(pageSize);
	}

	try {
		const docs = await query.exec();
		const totalDoc = await Product.countDocuments();

		res.set("X-Total-Count", totalDoc);
		return sendJsonResponse(res, HTTP_STATUS_CODES.OK, true, "Records Found!", docs);
	} catch (error) {
		console.error("Error:", error); // Log the error for better tracking.

		return sendJsonResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error occurred!", {
			error: error.message || error,
		});
	}
};
