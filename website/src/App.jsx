import Header from "./view/partials/Header";
import Footer from "./view/partials/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./store/redux/auth";
import { fetchCartByUserAsync } from "./actions/cart";
import { useEffect, lazy, Suspense } from "react";
import { useToast } from "./store/hooks/useToast";
import { loginUserAsync } from "./actions/user";

const LazyComponents = {
	Home: lazy(() => import("./view/Home")),
	Shop: lazy(() => import("./view/Shop")),
	Register: lazy(() => import("./view/component/auth/Register")),
	Login: lazy(() => import("./view/component/auth/Login")),
	ForgotPassword: lazy(() => import("./view/component/auth/ForgotPassword")),
	ProductDetail: lazy(() => import("./view/ProductDetail")),
	Cart: lazy(() => import("./view/Cart")),
	UserDashboard: lazy(() => import("./view/UserDashboard")),
	Checkout: lazy(() => import("./view/Checkout")),
	OrderSuccess: lazy(() => import("./view/OrderSuccess")),
	ErrorPage: lazy(() => import("./view/ErrorPage")),
	Logout: lazy(() => import("./view/component/auth/Logout")),
};
const LoadingComponent = (
	<div id="loading">
		<div id="loading-center">
			<div id="loading-center-absolute">
				<div className="tp-preloader-content">
					<div className="tp-preloader-logo">
						<div className="tp-preloader-circle">
							<svg width={190} height={190} viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle stroke="#D9D9D9" cx={190} cy={190} r={180} strokeWidth={6} strokeLinecap="round" />
								<circle stroke="red" cx={190} cy={190} r={180} strokeWidth={6} strokeLinecap="round" />
							</svg>
						</div>
						<img src="assets/img/logo/preloader/preloader-icon.svg" alt="" />
					</div>
					<h3 className="tp-preloader-title">Shofy</h3>
					<p className="tp-preloader-subtitle">Loading</p>
				</div>
			</div>
		</div>
	</div>
);
function App() {
	const user = useSelector(userLoggedIn);
	const dispatch = useDispatch();
	const { notify } = useToast();

	useEffect(() => {
		dispatch(fetchCartByUserAsync({ formData: {}, notify }));
		dispatch(loginUserAsync({ formData: {}, notify }));
	}, [dispatch, user, notify]);

	return (
		<>
			<Router>
				<Header />
				<Suspense fallback={LoadingComponent}>
					<Routes>
						<Route path="/" element={<LazyComponents.Home />} />
						<Route path="/shop" element={<LazyComponents.Shop />} />
						<Route path="/product-detail/:id" element={<LazyComponents.ProductDetail />} />
						<Route path="/login" element={<LazyComponents.Login />} />
						<Route path="/register" element={<LazyComponents.Register />} />
						<Route path="/forgotPassword" element={<LazyComponents.ForgotPassword />} />
						<Route path="/Cart" element={<LazyComponents.Cart />} />
						<Route path="/checkout" element={<LazyComponents.Checkout />} />
						<Route path="/order-success" element={<LazyComponents.OrderSuccess />} />
						<Route path="/user" element={<LazyComponents.UserDashboard />} />
						<Route path="/logout" element={<LazyComponents.Logout />} />
						<Route path="*" element={<LazyComponents.ErrorPage />} />
					</Routes>
				</Suspense>
				<Footer />
			</Router>
		</>
	);
}

export default App;
