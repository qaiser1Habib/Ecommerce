export const GET_USER_INFO = "GET_USER_INFO";

export const GET_ALL_BANNERS = "GET_ALL_BANNERS";
export const GET_ALL_BLOGS = "GET_ALL_BLOGS";
export const GET_ALL_TESTIMONIALS = "GET_ALL_TESTIMONIALS";
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const GET_ALL_SUBSCRIPTIONS = "GET_ALL_SUBSCRIPTIONS";

export const IS_USER_LOGGED_IN = "IS_USER_LOGGED_IN";
export const LOGOUT_USER = "LOGOUT_USER";

export const ALLOWED_MEDIA_TYPES = "image/gif,image/x-png,image/jpeg,image/jpg,video/mp4,video/mkv";

export const HTTP_STATUS_CODES = {
	OK: 200,
	CREATED: 201,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOTFOUND: 404,
	NOT_ACCEPTABLE: 406,
	CONFLICT: 409,
	GONE: 410,
	UNPROCESSABLE_ENTITY: 422,
	INVALID_TOKEN: 498,
	INTERNAL_SERVER_ERROR: 500,
};
export const ITEMS_PER_PAGE = 12;
export function discountedPrice(item) {
	return Math.round(item.price * (1 - item.discountPercentage / 100), 2);
}
