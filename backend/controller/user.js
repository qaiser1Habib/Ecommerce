const { User } = require("../model/user");
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { sendJsonResponse, convertImageToWebp, generateUniqueFileName } = require("../utils/helper");
const jwt = require("jsonwebtoken");
var privateKEY = fs.readFileSync(path.join(__dirname, "../assets/encryptionKeys/privateKey.key"), "utf8");
// var publicKEY = fs.readFileSync(path.join(__dirname, "../assets/encryptionKeys/publicKey.key"), "utf8");
const filePath = path.join(__dirname, "../assets/images/users");

const register = async (request, response) => {
	const payload = request.body;

	if (!payload?.email || !payload?.password) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}

	try {
		// USER_FIELDS_UPDATE_BY_ADMIN_ONLY.forEach((key) => delete payload[key]);
		const dbUser = await User.findOne({ email: payload?.email });

		if (dbUser) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.CONFLICT, false, "Record Already Exists!", null);
		} else {
			const hashedPassword = await bcrypt.hash(payload?.password, 12);

			const user = new User({ ...payload, password: hashedPassword });

			const newUser = await user.save();

			if (newUser) {
				return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record created::success", newUser);
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record created::failure", null);
			}
		}
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const login = async (request, response) => {
	const { email, password, isAdminLogin } = request.body;

	if (!email || !password) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}

	try {
		const dbUser = await User.findOne({ email: email });

		if (dbUser) {
			if ((isAdminLogin && dbUser?.role === "admin") || (!isAdminLogin && dbUser?.role !== "admin")) {
				const isPasswordMatched = await bcrypt.compare(password, dbUser.password);

				if (isPasswordMatched) {
					var token = jwt.sign(
						{
							username: dbUser.name,
							email: dbUser.email,
							userID: dbUser._id,
							userRole: dbUser.role,
						},
						privateKEY,
						LOGIN_TOKEN_PREFERENCES
					);

					if (token) {
						return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Login::success", { token: token });
					} else {
						return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Login::failure", null);
					}
				} else {
					return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Invalid Password!", null);
				}
			} else {
				return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Access denied!", null);
			}
		} else {
			return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "No Record Found!", null);
		}
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const getUser = async (request, response) => {
	try {
		const { userID } = request?.jwtPayload;
		if (!userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Access denied!", null);
		}
		const dbUser = await User.findById(userID);
		const docs = {
			id: dbUser.id,
			email: dbUser.email,
			role: dbUser.role,
			name: dbUser.name,
			addresses: dbUser.addresses,
			profileImage: dbUser.profileImage,
		};
		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record Found", docs);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const updateUser = async (request, response) => {
	try {
		const { userID } = request.jwtPayload;
		const { password, ...payload } = request.body;
		const files = request.files;
		if (!userID) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}
		const dbUser = await User.findOne({ _id: userID });

		if (files.length) {
			for (let file of files) {
				const webpImage = await convertImageToWebp(file);
				const generatedFileName = generateUniqueFileName(webpImage, filePath);
				const fileFullPath = path.join(filePath, generatedFileName);
				if (dbUser[webpImage.fieldname]) {
					const existingFilePath = path.join(filePath, dbUser[webpImage.fieldname]);

					const isThereExistingFile = fs.existsSync(existingFilePath);
					if (isThereExistingFile) await fs.promises.unlink(existingFilePath);
				}

				await fs.promises.writeFile(fileFullPath, webpImage.buffer);

				payload.profileImage = generatedFileName;
			}
		}

		const updatedUser = await User.findOneAndUpdate({ _id: payload.id }, { ...payload }, { new: true }).select({
			password: 0,
		});
		if (updatedUser) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated::success", updatedUser);
		} else {
			return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Record updated::failure", null);
		}
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

const getUserImage = async (request, response) => {
	try {
		const { filename, width } = request.query;

		if (!filename) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const fileFullPath = path.join(filePath, filename);
		const isFileExists = fs.existsSync(fileFullPath);
		const sourceFile = fs.readFileSync(isFileExists ? fileFullPath : placeholderImage);
		const optimizedImage = width ? await sharp(sourceFile).resize(parseInt(width)).toBuffer() : sourceFile;

		response.writeHead(200, {
			"Content-Type": "image/webp",
		});

		response.end(optimizedImage);
	} catch (error) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
			error: error?.message || error,
		});
	}
};

module.exports = {
	register,
	login,
	updateUser,
	getUser,
	getUserImage,
	// updatePassword,
	// sendUserVerificationEmail,
	// verifyUserEmailByOTP,
	// sendPasswordResetEmail,
	// passwordResetUsingVerificationEmail,
	// deleteUser,
};
