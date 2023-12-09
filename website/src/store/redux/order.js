import { createSlice } from "@reduxjs/toolkit";
import { createOrderAsync } from "../../actions/order";

const initialState = {
	orders: [],
	status: "idle",
	currentOrder: null,
};
export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		resetOrder: (state) => {
			state.currentOrder = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createOrderAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createOrderAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.orders.push(action?.payload);
				state.currentOrder = action?.payload?.payload;
			});
	},
});

export const { resetOrder } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectCurrentOrder = (state) => state.order.currentOrder;

export default orderSlice.reducer;
