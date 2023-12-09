import { createSlice } from "@reduxjs/toolkit";
import { fetchAllOrdersAsync, orderUpdateAsync } from "../../actions/orders";

const initialState = {
	orders: [],
	status: "idle",
	totalOrders: 0,
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
			.addCase(fetchAllOrdersAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.orders = action?.payload?.products;
				state.totalOrders = action?.payload?.totalDocs;
			})
			.addCase(orderUpdateAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(orderUpdateAsync.fulfilled, (state, action) => {
				state.status = "idle";
				const index = state.orders.findIndex((order) => order.id === action?.payload.id);
				state.orders[index] = action?.payload;
			});
	},
});

export const { resetOrder } = orderSlice.actions;

export const selectOrders = (state) => state.order.orders;
export const selectTotalOrders = (state) => state.order.totalOrders;

export default orderSlice.reducer;
