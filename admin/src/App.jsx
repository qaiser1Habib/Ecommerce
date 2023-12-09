import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "./view/partials/Header";
import Footer from "./view/partials/Footer";
import Login from "./view/component/auth/login";
import SignUp from "./view/component/auth/signUp";
import ForgotPassword from "./view/component/auth/forgotPassword";
import NewPassword from "./view/newPassword";
import Dashboard from "./view/Dashboard";
import Banners from "./view/Banners";
import Users from "./view/Users";
import ViewProfile from "./view/viewProfile";
import Products from "./view/products";
import Categories from "./view/Categories";
import Orders from "./view/Orders";
import SignOut from "./view/component/auth/SignOut";
import { verifyUserLogin } from "./actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "./store/redux/auth";
import { useToast } from "./store/hook/useToast";
import { loginUserAsync } from "./actions/user";

const ProtectedRoute = ({ authStatus }) => {
	return authStatus === true ? <Outlet /> : authStatus === false ? <Navigate to="/login" /> : null;
};

const GuestRoute = ({ authStatus }) => {
	return authStatus === true ? <Navigate to="/" /> : authStatus === false ? <Outlet /> : null;
};

function App() {
	const [authStatus, setAuthStatus] = useState(false);

	const loggedIn = useSelector(userLoggedIn || false);

	const dispatch = useDispatch();
	const notify = useToast();

	useEffect(() => {
		dispatch(verifyUserLogin(notify)).then(() => {
			setAuthStatus(loggedIn && true);
			if (loggedIn) dispatch(loginUserAsync(notify));
		});
	}, [loggedIn]);

	return (
		<>
			<div
				id="kt_app_body"
				data-kt-app-header-stacked="true"
				data-kt-app-header-primary-enabled="true"
				data-kt-app-header-secondary-enabled="true"
				className="app-default"
				data-bs-theme="light"
			>
				<div className="d-flex flex-column flex-root app-root vh-100" id="kt_app_root">
					<Routes>
						{/* Protected routes for logged in users */}
						<Route
							path="/"
							element={
								<>
									<Header />
									<ProtectedRoute authStatus={authStatus} />
									<Footer />
								</>
							}
						>
							<Route path="/" element={<Dashboard />} />
							<Route path="/new-password" element={<NewPassword />} />
							<Route path="/banners" element={<Banners />} />
							<Route path="/user" element={<Users />} />
							<Route path="/products" element={<Products />} />
							<Route path="/categories" element={<Categories />} />
							<Route path="/profile" element={<ViewProfile />} />
							<Route path="/order" element={<Orders />} />
							<Route path="/logout" element={<SignOut />} />
						</Route>

						{/* Guest routes for users not logged in */}
						<Route path="/" element={<GuestRoute authStatus={authStatus} />}>
							<Route path="/sign-up" element={<SignUp />} />
							<Route path="/login" element={<Login />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
						</Route>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
