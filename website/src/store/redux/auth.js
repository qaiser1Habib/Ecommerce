import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUserAsync, updateUserAsync } from "../../actions/auth";

const initialState = {
	userInfo: {},
	loggedIn: false,
	status: "idle",
};
export const authSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		clearSelectedProduct: (state) => {
			state.selectedProduct = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(registerUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action?.payload || {};
			})
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action?.payload || {};
				state.loggedIn = action?.payload ? true : false;
			})
			.addCase(updateUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action?.payload || {};
			})
			.addCase(updateUserAsync.rejected, (state, action) => {
				state.status = "idle";
				console.log(action?.error);
			});
	},
});

export const { clearSelectedProduct } = authSlice.actions;

export const userLoggedIn = (state) => state.auth.loggedIn;
export const userSelector = (state) => state.auth.userInfo;

export default authSlice.reducer;
