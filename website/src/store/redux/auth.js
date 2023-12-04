import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUserAsync, signOut, verifyUserLogin } from "../../actions/auth";

const initialState = {
	loggedInUserToken: false,
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
				state.loggedInUserToken = action?.payload || false;
			})
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedInUserToken = action?.payload || false;
			})
			.addCase(verifyUserLogin.pending, (state) => {
				state.status = "loading";
			})
			.addCase(verifyUserLogin.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedInUserToken = action?.payload || false;
			})
			.addCase(signOut.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signOut.fulfilled, (state) => {
				state.status = "idle";
				state.loggedInUserToken = false;
			});
	},
});

export const { clearSelectedProduct } = authSlice.actions;

export const userLoggedIn = (state) => state.auth.loggedInUserToken;

export default authSlice.reducer;
