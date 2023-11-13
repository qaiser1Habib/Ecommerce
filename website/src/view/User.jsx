import UserDetail from "./component/user/UserDetail";
import UserProfile from "./component/user/UserProfile";
import UserChangePassword from "./component/user/UserChangePassword";
import UserOrders from "./component/user/UserOrders";
import UserActivity from "./component/user/UserActivity";
import UserShippingAddress from "./component/user/UserAddress";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../store/hooks/useToast";
import { selectUserOrder } from "../store/redux/user";
import { loginUserOrderAsync } from "../actions/user";
import { userSelector } from "../store/redux/auth";

const User = () => {
	const [currentComponent, setCurrentComponent] = useState("UserProfile");
	const dispatch = useDispatch();
	const orders = useSelector(selectUserOrder);
	const user = useSelector(userSelector);

	const { notify } = useToast();
	const renderCurrentComponent = () => {
		switch (currentComponent) {
			case "UserDetail":
				return <UserDetail />;
			case "UserProfile":
				return <UserProfile user={user} order={orders} />;
			case "UserOrders":
				return <UserOrders orders={orders} />;
			case "UserActivity":
				return <UserActivity />;
			case "UserShippingAddress":
				return <UserShippingAddress orders={orders} />;
			case "UserChangePassword":
				return <UserChangePassword />;
			default:
				return null;
		}
	};

	useEffect(() => {
		dispatch(loginUserOrderAsync({ formData: { userID: user.id }, notify }));
	}, [dispatch, user]);
	return (
		<main>
			<section className="profile__area pt-120 pb-120">
				<div className="container">
					<div className="profile__inner p-relative">
						<div className="profile__shape">
							<img className="profile__shape-1" src="assets/img/login/laptop.png" alt="" />
							<img className="profile__shape-2" src="assets/img/login/man.png" alt="" />
							<img className="profile__shape-3" src="assets/img/login/shape-1.png" alt="" />
							<img className="profile__shape-4" src="assets/img/login/shape-2.png" alt="" />
							<img className="profile__shape-5" src="assets/img/login/shape-3.png" alt="" />
							<img className="profile__shape-6" src="assets/img/login/shape-4.png" alt="" />
						</div>
						<div className="row">
							<div className="col-xxl-4 col-lg-4">
								<div className="profile__tab mr-40">
									<div className="nav nav-tabs tp-tab-menu flex-column">
										<button
											onClick={() => setCurrentComponent("UserProfile")}
											className={`nav-link ${currentComponent === "UserProfile" ? "active" : ""}`}
										>
											<span>
												<i className="fa-regular fa-user-pen" />
											</span>
											Profile
										</button>
										<button
											onClick={() => setCurrentComponent("UserDetail")}
											className={`nav-link ${currentComponent === "UserDetail" ? "active" : ""}`}
										>
											<span>
												<i className="fa-regular fa-circle-info" />
											</span>{" "}
											Information
										</button>
										<button
											onClick={() => setCurrentComponent("UserShippingAddress")}
											className={`nav-link ${currentComponent === "UserShippingAddress" ? "active" : ""}`}
										>
											<span>
												<i className="fa-light fa-location-dot" />
											</span>{" "}
											Address{" "}
										</button>
										<button
											onClick={() => setCurrentComponent("UserOrders")}
											className={`nav-link ${currentComponent === "UserOrders" ? "active" : ""}`}
										>
											<span>
												<i className="fa-light fa-clipboard-list-check" />
											</span>{" "}
											My Orders{" "}
										</button>
										<button
											onClick={() => setCurrentComponent("UserActivity")}
											className={`nav-link ${currentComponent === "UserActivity" ? "active" : ""}`}
										>
											<span>
												<i className="fa-regular fa-bell" />
											</span>{" "}
											Notification
										</button>
										<button
											onClick={() => setCurrentComponent("UserChangePassword")}
											className={`nav-link ${currentComponent === "UserChangePassword" ? "active" : ""}`}
										>
											<span>
												<i className="fa-regular fa-lock" />
											</span>{" "}
											Change Password
										</button>
										<span className="tp-tab-line d-none d-sm-inline-block" />
									</div>
								</div>
							</div>
							<div className="col-xxl-8 col-lg-8">
								<div className="profile__tab-content">
									<div className="tab-content">{renderCurrentComponent()}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default User;
