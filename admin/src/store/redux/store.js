import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import orderReducer from "./orders";

const store = configureStore({
	reducer: { product: productReducer, order: orderReducer },
});

export default store;
