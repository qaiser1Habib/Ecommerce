const { User } = require("../model/user");
const bcrypt = require("bcrypt");
const { sendJsonResponse } = require("../utils/helper");

const register = async (request, response) => {
	const payload = request.body;

	if (!payload?.email || !payload?.password) {
		return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
	}

	try {
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
			if ((isAdminLogin && dbUser?.userRole === "admin") || (!isAdminLogin && dbUser?.userRole !== "admin")) {
				const isPasswordMatched = await bcrypt.compare(password, dbUser.password);

				if (isPasswordMatched) {
					// var token = jwt.sign(
					// 	{
					// 		username: dbUser.username,
					// 		email: dbUser.email,
					// 		userID: dbUser._id,
					// 		userRole: dbUser.userRole,
					// 		userStatus: dbUser.userStatus,
					// 	},
					// 	privateKEY,
					// 	LOGIN_TOKEN_PREFERENCES
					// );
					const docs = {
						id: dbUser.id,
						email: dbUser.email,
						role: dbUser.role,
						name: dbUser.name,
						addresses: dbUser.addresses,
					};

					return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Login::success", docs);

					// if (token) {
					// } else {
					// 	return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Login::failure", null);
					// }
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

const updateUser = async (request, response) => {
	console.log(request.body);
	try {
		const { id, addresses } = request.body;

		if ((!id, !addresses)) {
			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
		}

		const user = await User.findByIdAndUpdate(id, request.body, {
			new: true,
		});
		const result = await User.findOne({ _id: id });

		const docs = {
			id: result.id,
			email: result.email,
			role: result.role,
			name: result.name,
			addresses: result.addresses,
		};

		return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated::success", docs);
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
	// getUser,
	// getUserImage,
	// updatePassword,
	// sendUserVerificationEmail,
	// verifyUserEmailByOTP,
	// sendPasswordResetEmail,
	// passwordResetUsingVerificationEmail,
	// deleteUser,
};
