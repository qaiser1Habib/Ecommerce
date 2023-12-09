const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const sendJsonResponse = (res, httpCode, status = false, message = "No Message To Show!", payload = null, totalDocs) => {
	return res.status(HTTP_STATUS_CODES.OK).json({
		httpCode,
		status,
		message,
		payload,
		totalDocs,
	});
};
const convertImageToWebp = async (file) => {
	try {
		const outputBuffer = await sharp(file.buffer).webp({ quality: 90 }).toBuffer();
		if (outputBuffer) {
			file.originalname = path.basename(file.originalname, path.extname(file.originalname)) + ".webp";
			file.mimetype = "image/webp";
		}

		return file;
	} catch (error) {
		throw error;
	}
};

const generateRandomNumber = (numberLength) => {
	return Math.floor(Math.random() * (9 * Math.pow(10, numberLength - 1))) + Math.pow(10, numberLength - 1);
};

const generateUniqueFileName = (file, filePath) => {
	let fileName = null;
	let isFileAlreadyExists = false;

	do {
		const uniqueFileID = generateRandomNumber(10);
		const currentTimestamp = new Date().toISOString().replace(/[-:.]/g, "");
		const sanitizedFileName = file.originalname
			.split(".")
			.slice(0, -1)
			.join()
			.replace(/[_\s,.]/g, "-");
		const fileExtension = file.originalname.split(".").pop();

		fileName = `${uniqueFileID}-${currentTimestamp}-${sanitizedFileName}.${fileExtension}`;
		isFileAlreadyExists = fs.existsSync(path.join(filePath, fileName));
	} while (isFileAlreadyExists);

	return fileName;
};
module.exports = {
	sendJsonResponse,
	convertImageToWebp,
	generateUniqueFileName,
	// generateRandomNumber,
	// addMinutesToDate,
	// Sleep,
	// convertMillisecondsToTimeFormat,
	// sendEmail,
	// getRemainingLimitsForUserSubscriptionPlan,
};
