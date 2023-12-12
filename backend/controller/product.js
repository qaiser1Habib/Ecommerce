const { Product } = require("../model/product");
const { User } = require("../model/user");
const { sendJsonResponse, convertImageToWebp, generateUniqueFileName } = require("../utils/helper");
const fs = require("fs");
const sharp = require("sharp");
const path = require("path");
const filePath = path.join(__dirname, "../assets/images/products");
const placeholderImage = path.join(__dirname, "../assets/images/placeholder.webp");

exports.createProduct = async (request, response) => {
	let media = [];

	try {
		const payload = request?.body;
		const { userID: authenticatingUserID } = request.jwtPayload;
		const files = request.files;
		if (!files.length || (!payload.title && (!payload.price || !payload.brand))) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!");
		}

		const authenticatingDBUser = await User.findOne({ _id: authenticatingUserID });

		if (authenticatingDBUser?.role === "admin") {
			if (files.length) {
				for (let i = 0; i < files.length; i++) {
					let file = files[i];
					if (file.mimetype.startsWith("image")) file = await convertImageToWebp(file);

					const generatedFileName = generateUniqueFileName(file, filePath);
					const fileFullPath = path.join(filePath, generatedFileName);

					await fs.promises.writeFile(fileFullPath, file.buffer);
					media.push({ mimetype: file.mimetype, filename: generatedFileName });
				}

				payload.media = media;
			}

			const dbProduct = await Product.findOne({ title: payload?.title });
			if (dbProduct) {
				return sendJsonResponse(response, HTTP_STATUS_CODES.CONFLICT, false, "Record Already Exists!", null);
			}
			const product = new Product({ ...payload });

			const newProduct = await product.save();

			if (newProduct) {
				return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record created::success", newProduct);
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record created::failure", null);
			}
		} else {
			return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Permission denied!", null);
		}
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
		return sendJsonResponse(res, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error occurred!", {
			error: error.message || error,
		});
	}
};

exports.getProductImage = async (request, response) => {
	try {
		const { filename, width, mimetype } = request.query;

		if (!filename || !mimetype) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const fileFullPath = path.join(filePath, filename);
		const isFileExists = fs.existsSync(fileFullPath);

		const sourceFile = fs.readFileSync(isFileExists ? fileFullPath : placeholderImage);
		const optimizedImage =
			mimetype.startsWith("image") && width ? await sharp(sourceFile).resize(parseInt(width)).toBuffer() : sourceFile;

		response.writeHead(200, {
			"Content-Type": mimetype,
		});

		response.end(optimizedImage);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};


exports.updateProduct = async (request, response) => {
	let media = [];

	try {
		const payload = request.body;
		const { userID: authenticatingUserID } = request.jwtPayload;
		const files = request.files;

		if (!payload.id) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const authenticatingDBUser = await User.findOne({ _id: authenticatingUserID });
		if (authenticatingDBUser?.role === "admin") {
			const dbProduct = await Product.findOne({ _id: payload.id });

			if (dbProduct) {
				if (files.length) {
					for (let i = 0; i < files.length; i++) {
						let file = files[i];

						if (file.mimetype.startsWith("image")) file = await convertImageToWebp(file);

						const generatedFileName = generateUniqueFileName(file, filePath);
						const fileFullPath = path.join(filePath, generatedFileName);

						await fs.promises.writeFile(fileFullPath, file.buffer);
						media.push({ mimetype: file.mimetype, filename: generatedFileName });
					}

					payload.media = media;
				}

				// const updatedProduct = await Product.findOneAndUpdate({ _id: payload.id }, { $set: { ...payload } }, { new: true });
				const updatedProduct = await Product.findByIdAndUpdate(payload.id, payload, {
					new: true,
				});

				if (updatedProduct) {
					if (dbProduct?.media?.length) {
						for (let media of dbProduct.media) {
							const existingFilePath = path.join(filePath, media.filename);
							const isThereExistingFile = fs.existsSync(existingFilePath);

							if (isThereExistingFile) await fs.promises.unlink(existingFilePath);
						}
					}

					return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated::success", updatedProduct);
				} else {
					return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record updated::failure", null);
				}
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record Not Found!", null);
			}

			// const product = await Product.findByIdAndUpdate(payload.id, payload, {
			// 	new: true,
			// });

			// if (!product) {
			// 	return sendJsonResponse(response, HTTP_STATUS_CODES.NOT_FOUND, false, "Product not found", null);
			// }
			// return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated successfully", product);
		} else {
			return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Permission denied!", null);
		}
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
