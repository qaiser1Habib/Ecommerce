import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUserAsync, signOut } from "../../actions/auth";

const initialState = {
	loggedIn: null,
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
				state.loggedIn = action?.payload || {};
			})
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedIn = action?.payload || {};
			})
			.addCase(signOut.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signOut.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedIn = null;
			});
	},
});

export const { clearSelectedProduct } = authSlice.actions;

export const userLoggedIn = (state) => state.auth.loggedIn;

export default authSlice.reducer;
