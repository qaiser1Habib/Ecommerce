const { Product } = require("../model/product");
const { sendJsonResponse } = require("../utils/helper");

exports.createProduct = async (request, response) => {
	const { title, price, brand } = request.body;
	if (!title && (!price || !brand)) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!");
	}
	const dbProduct = await Product.findOne({ title: request.body?.title });

	if (dbProduct) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.CONFLICT, false, "Record Already Exists!", null);
	}
	const product = new Product(request.body);
	try {
		const doc = await product.save();
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Success::Records Added", doc);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error occurred!", {
			error: error.message || error,
		});
	}
};

exports.fetchAllProduct = async (req, res) => {
	const { id, page, limit, category, brand, sort, order } = req.query;

	if (!id && (!page || !limit)) {
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

	if (id) {
		query = Product.findOne({ _id: id });
	}

	if (page && limit) {
		const pageSize = parseInt(limit);
		const pageNumber = parseInt(page);
		query = query.skip(pageSize * (pageNumber - 1)).limit(pageSize);
	}

	try {
		const docs = await query.exec();
		const totalDocs = await Product.countDocuments();

		return sendJsonResponse(res, HTTP_STATUS_CODES.OK, true, "Records Found!", docs, totalDocs);
	} catch (error) {
		console.error("Error:", error);
		return sendJsonResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error occurred!", {
			error: error.message || error,
		});
	}
};

exports.updateProduct = async (request, response) => {
	try {
		const payload = request.body;

		if (!payload.id) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const product = await Product.findByIdAndUpdate(payload.id, payload, {
			new: true,
		});

		if (!product) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.NOT_FOUND, false, "Product not found", null);
		}

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated successfully", product);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};
exports.deleteProduct = async (request, response) => {
	try {
		const { _id: productID } = request.query;
		const { userID: authenticatingUserID } = request.jwtPayload;

		if (!productID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const authenticatingDBUser = await users.findOne({ _id: authenticatingUserID });
		const dbProduct = await products.findOne({ _id: productID });

		if (dbProduct.sellerID.toString() === authenticatingUserID || authenticatingDBUser.userRole === "admin") {
			const deletedProduct = await products.findOneAndDelete({ _id: productID }, { new: true });

			if (deletedProduct) {
				if (deletedProduct?.media?.length) {
					for (let media of deletedProduct.media) {
						const existingFilePath = path.join(filePath, media.filename);
						const isThereExistingFile = fs.existsSync(existingFilePath);

						if (isThereExistingFile) await fs.promises.unlink(existingFilePath);
					}
				}

				return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record delete::success", deletedProduct);
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record delete::failure", null);
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
