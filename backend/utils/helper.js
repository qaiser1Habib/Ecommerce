const sendJsonResponse = (res, httpCode, status = false, message = "No Message To Show!", payload = null, totalDocs) => {
	return res.status(HTTP_STATUS_CODES.OK).json({
		httpCode,
		status,
		message,
		payload,
		totalDocs,
	});
};

module.exports = {
	sendJsonResponse,
	// generateRandomNumber,
	// addMinutesToDate,
	// Sleep,
	// convertMillisecondsToTimeFormat,
	// convertImageToWebp,
	// generateUniqueFileName,
	// sendEmail,
	// getRemainingLimitsForUserSubscriptionPlan,
};
