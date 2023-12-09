import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, loginUserOrderAsync, updateUserAsync } from "../../actions/user";

const initialState = {
	userOrders: [],
	userInfo: null,
	status: "idle",
};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUserOrderAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUserOrderAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userOrders = action?.payload || [];
			})
			.addCase(loginUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action?.payload || {};
			})
			.addCase(updateUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action?.payload || {};
			})
			
	},
});

// export const {} = userSlice.actions;

export const selectUserOrder = (state) => state.user.userOrders;
export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
