import { createSlice } from "@reduxjs/toolkit";
import { loginUserOrderAsync } from "../../actions/user";

const initialState = {
	userOrders: [],
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
				state.userOrders = action?.payload;
			});
	},
});

// export const {} = userSlice.actions;

// export const selectOrders = (state) => state.order.orders;
export const selectUserOrder = (state) => state.user.userOrders;

export default userSlice.reducer;
