// const users = require("../models/users");
// const { sendJsonResponse, sendEmail } = require("../utils/helpers");

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const endpointSecret = process.env.WEBHOOK_ENDPOINT_SECRET;


// const getPaymentInfo = async (request, response) => {
// 	let paymentInfo = null;

// 	try {
// 		const { paymentMode, paymentID } = request.query;

// 		if (paymentMode === "subscription") {
// 			paymentInfo = await stripe.subscriptions.retrieve(paymentID);
// 		}

// 		if (paymentInfo) return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record Found", paymentInfo);
// 		return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "No Record Found!", null);
// 	} catch (error) {
// 		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
// 			error: error?.message || error,
// 		});
// 	}
// };

// const getPaymentSession = async (request, response) => {
// 	const originUrl = request?.headers?.origin;

// 	try {
// 		const { gateway, paymentMode, subscription } = request.body;
// 		const { userID: authenticatingUserID } = request.jwtPayload;

// 		if (!gateway || !paymentMode) {
// 			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
// 		}

// 		if (gateway === "stripe") {
// 			if (paymentMode === "subscription" && subscription?.duration) {
// 				const dbUser = await users.findOne({ _id: authenticatingUserID });

// 				if (dbUser?.subscription?.subscriptionPlanID) {
// 					const dbSubscription = await subscriptions.findOne({ _id: dbUser.subscription.subscriptionPlanID });

// 					if (dbSubscription?.stripePriceKeys?.[subscription.duration]) {
// 						const session = await stripe.checkout.sessions.create({
// 							mode: paymentMode,
// 							payment_method_types: ["card"],
// 							line_items: [
// 								{
// 									price: dbSubscription.stripePriceKeys[subscription.duration],
// 									quantity: 1,
// 								},
// 							],
// 							allow_promotion_codes: true,
// 							client_reference_id: authenticatingUserID,
// 							metadata: { payment_for: "subscription" },
// 							success_url: originUrl + process.env.CLIENT_POST_PAYMENT_URL + "?payment-status=success",
// 							cancel_url: originUrl + process.env.CLIENT_POST_PAYMENT_URL + "?payment-status=failed",
// 						});

// 						if (session) {
// 							return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Payment Session Created::success", session);
// 						} else {
// 							return sendJsonResponse(
// 								response,
// 								HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
// 								false,
// 								"Payment Session Created::failure",
// 								null,
// 							);
// 						}
// 					} else {
// 						return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "Price Key Not Found!", null);
// 					}
// 				} else {
// 					return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "User Subscription Not Found!", null);
// 				}
// 			} else if (paymentMode === "featured-photographer") {
// 				const session = await stripe.checkout.sessions.create({
// 					mode: "payment",
// 					payment_method_types: ["card"],
// 					line_items: [
// 						{
// 							price: process.env.FEATURED_PHOTOGRAPHER_PRICE_KEY,
// 							quantity: 1,
// 						},
// 					],
// 					client_reference_id: authenticatingUserID,
// 					metadata: { payment_for: "featured-photographer" },
// 					success_url: process.env.PAYMENT_SUCCESS_URL,
// 					cancel_url: process.env.PAYMENT_FAILED_URL,
// 				});

// 				if (session) {
// 					return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Payment Session Created::success", session);
// 				} else {
// 					return sendJsonResponse(
// 						response,
// 						HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
// 						false,
// 						"Payment Session Created::failure",
// 						null,
// 					);
// 				}
// 			} else {
// 				return sendJsonResponse(response, HTTP_STATUS_CODES.NOT_ACCEPTABLE, false, "Payment Mode Not Supported!", null);
// 			}
// 		} else {
// 			return sendJsonResponse(response, HTTP_STATUS_CODES.NOT_ACCEPTABLE, false, "Payment Channel Not Supported!", null);
// 		}
// 	} catch (error) {
// 		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
// 			error: error?.message || error,
// 		});
// 	}
// };

// const handleWebhook = async (request, response) => {
// 	let event = null;
// 	let paymentInfo = null;
// 	let updatedUser = {};
// 	let sessionCompletePayload = {
// 		client_reference_id: null,
// 		paymentID: null,
// 		paymentStatus: null,
// 		paymentType: null,
// 		paymentFor: null,
// 	};

// 	try {
// 		const sig = request.headers["stripe-signature"];
// 		event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);

// 		switch (event.type) {
// 			case STRIPE_EVENTS.SESSION_COMPLETED:
// 				const session = event.data.object;

// 				Object.assign(sessionCompletePayload, {
// 					client_reference_id: session?.client_reference_id,
// 					paymentID: session?.subscription || session?.payment_intent,
// 					paymentStatus: session?.payment_status,
// 					paymentType: session?.payment_method_types,
// 					paymentFor: session?.metadata?.payment_for,
// 				});
// 				break;
// 			case STRIPE_EVENTS.PAYMENT_SUCCEEDED:
// 				// Handle other events if needed
// 				break;
// 			case STRIPE_EVENTS.PAYMENT_FAILED:
// 				// Handle other events if needed
// 				break;
// 			default:
// 				return response.status(400).end();
// 		}

// 		if (
// 			!sessionCompletePayload?.client_reference_id ||
// 			!sessionCompletePayload?.paymentStatus ||
// 			!sessionCompletePayload?.paymentType?.length ||
// 			!sessionCompletePayload?.paymentFor
// 		)
// 			response.status(200).json({ received: false });

// 		if (sessionCompletePayload?.paymentFor === "subscription" && sessionCompletePayload?.paymentID) {
// 			paymentInfo = await stripe.subscriptions.retrieve(sessionCompletePayload.paymentID);

// 			if (paymentInfo) {
// 				updatedUser = await users.findOneAndUpdate(
// 					{ _id: sessionCompletePayload.client_reference_id },
// 					{
// 						$set: {
// 							"subscription.activationDate": new Date(paymentInfo?.current_period_start * 1000),
// 							"subscription.expiryDate": new Date(paymentInfo?.current_period_end * 1000),
// 							"subscription.isActive": paymentInfo?.status === "active" ? true : false,
// 							"subscription.paymentID": sessionCompletePayload.paymentID,
// 							"subscription.paymentStatus": sessionCompletePayload.paymentStatus,
// 							"subscription.paymentType": sessionCompletePayload.paymentType,
// 							"subscription.cancellation.status": false,
// 							"subscription.cancellation.date": null,
// 							"subscription.cancellation.reason": "",
// 						},
// 					},
// 					{ new: true },
// 				);

// 				const emailReplacements = { subject: "Subscription Purchased", subscription: "" };
// 				await sendEmail(updatedUser?.email, emailReplacements, "subscriptionBuy.html");

// 				response.status(200).json({ received: true });
// 			}
// 		} else if (sessionCompletePayload?.paymentFor === "featured-photographer") {
// 			paymentInfo = await stripe.paymentIntents.retrieve(sessionCompletePayload.paymentID);

// 			if (paymentInfo) {
// 				const lastDBPayload = await users.findOne({}).sort({ "photographer.featured.order": -1 });
// 				const nextOrderID = lastDBPayload?.photographer?.featured?.order + 1 || 1;

// 				updatedUser = await users.findOneAndUpdate(
// 					{ _id: sessionCompletePayload.client_reference_id },
// 					{
// 						$set: {
// 							"photographer.featured.order": nextOrderID,
// 							"photographer.featured.paymentID": sessionCompletePayload.paymentID,
// 							"photographer.featured.activationDate": new Date(paymentInfo?.created * 1000),
// 							"photographer.featured.paymentType": sessionCompletePayload.paymentType,
// 							"photographer.featured.paymentStatus": sessionCompletePayload.paymentStatus,
// 							"photographer.featured.isActive":
// 								paymentInfo?.status === "active" || paymentInfo?.status === "succeeded" ? true : false,
// 						},
// 					},
// 					{ new: true },
// 				);

// 				const emailReplacements = {
// 					subject: "Featured Photographer Purchased",
// 					user: updatedUser?.firstName + " " + updatedUser?.lastName,
// 					heading: "You have become a featured photographer",
// 				};
// 				await sendEmail(updatedUser?.email, emailReplacements, "generalInfo.html");

// 				response.status(200).json({ received: true });
// 			}
// 		}
// 	} catch (error) {
// 		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
// 			error: error?.message || error,
// 		});
// 	}
// };

// const cancelSubscriptionPlan = async (request, response) => {
// 	try {
// 		const { userID, paymentMode, reason } = request.query;
// 		const { userID: authenticatingUserID } = request.jwtPayload;

// 		if (!userID || !paymentMode) {
// 			return sendJsonResponse(response, HTTP_STATUS_CODES.BAD_REQUEST, false, "Missing parameters!", null);
// 		}

// 		if (paymentMode === "subscription") {
// 			const authenticatingDBUser = await users.findOne({ _id: authenticatingUserID });
// 			const dbUser = await users.findOne({ _id: userID });

// 			if (dbUser && authenticatingDBUser) {
// 				if (userID === authenticatingUserID || authenticatingDBUser.userRole === "admin") {
// 					if (dbUser?.subscription?.paymentID) {
// 						const subscription = await stripe.subscriptions.update(dbUser?.subscription?.paymentID, {
// 							cancel_at_period_end: true,
// 						});

// 						if (subscription.cancel_at_period_end) {
// 							const updatedUser = await users.findOneAndUpdate(
// 								{ _id: userID },
// 								{
// 									$set: {
// 										"subscription.cancelation.status": true,
// 										"subscription.cancelation.date": subscription?.canceled_at * 1000,
// 										"subscription.cancelation.reason": reason || subscription?.cancellation_details?.reason,
// 										"subscription.isActive": false,
// 									},
// 								},
// 								{ fields: { password: 0 }, new: true },
// 							);

// 							if (updatedUser) {
// 								const emailReplacements = {
// 									subject: "Subscription Cancelled",
// 									user: updatedUser?.firstName + " " + updatedUser?.lastName,
// 									subscription: "",
// 								};

// 								await sendEmail(updatedUser?.email, emailReplacements, "subscriptionCancel.html");

// 								return sendJsonResponse(response, HTTP_STATUS_CODES.OK, true, "Record updated::success", updatedUser);
// 							} else {
// 								return sendJsonResponse(
// 									response,
// 									HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
// 									false,
// 									"Record updated::failure",
// 									null,
// 								);
// 							}
// 						} else {
// 							return sendJsonResponse(
// 								response,
// 								HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
// 								false,
// 								"Subscription Update Error!",
// 								null,
// 							);
// 						}
// 					} else {
// 						return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "Subscription Not Found!", null);
// 					}
// 				} else {
// 					return sendJsonResponse(response, HTTP_STATUS_CODES.UNAUTHORIZED, false, "Access denied!", null);
// 				}
// 			} else {
// 				return sendJsonResponse(response, HTTP_STATUS_CODES.NOTFOUND, false, "Record Not Found!", null);
// 			}
// 		} else {
// 			return sendJsonResponse(response, HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY, false, "Currently Not Supported!", null);
// 		}
// 	} catch (error) {
// 		return sendJsonResponse(response, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, false, "Error!", {
// 			error: error?.message || error,
// 		});
// 	}
// };

// module.exports = {
// 	getPaymentSession,
// 	handleWebhook,
// 	getPaymentInfo,
// 	cancelSubscriptionPlan,
// };
