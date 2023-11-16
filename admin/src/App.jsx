import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
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

function App() {
	const [showAdminHeaderFooter, setShowAdminHeaderFooter] = useState(true);
	const funcShowRef = useRef(setShowAdminHeaderFooter);
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
					{showAdminHeaderFooter && <Header />}
					<Routes>
						<Route path="/login" element={<Login funcShow={funcShowRef.current} />} />
						<Route path="/sign-up" element={<SignUp funcShow={funcShowRef.current} />} />
						<Route path="/forgot-password" element={<ForgotPassword funcShow={funcShowRef.current} />} />
						<Route path="/new-password" element={<NewPassword funcShow={funcShowRef.current} />} />
						<Route path="/" element={<Dashboard funcShow={funcShowRef.current} />} />
						<Route path="/banners" element={<Banners />} />
						<Route path="/user" element={<Users />} />
						<Route path="/products" element={<Products />} />
						<Route path="/categories" element={<Categories />} />
						<Route path="/profile" element={<ViewProfile />} />
					</Routes>
					{showAdminHeaderFooter && <Footer />}
				</div>
			</div>
		</>
	);
}

export default App;
