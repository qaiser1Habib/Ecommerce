import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectItems } from "../../store/redux/cart";
import { selectUserInfo } from "../../store/redux/user";
import { userLoggedIn } from "../../store/redux/auth";
import { selectCategories } from "../../store/redux/categories";
import { useEffect, useState } from "react";
import { getCategoriesAsync } from "../../actions/categories";
import { useToast } from "../../store/hooks/useToast";
import { selectWishlist } from "../../store/redux/wishlist";

const Header = () => {
	const { notify } = useToast();
	const user = useSelector(selectUserInfo);
	const wishlist = useSelector(selectWishlist);

	const cartItems = useSelector(selectItems);
	const loggedIn = useSelector(userLoggedIn || false);
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);
	const [searchFormData, setSearchFormData] = useState({
		search: "",
		category: "",
	});
	useEffect(() => {
		dispatch(getCategoriesAsync(notify));
	}, [dispatch]);

	const handleFormDataInput = (e) => {
		const { name, value } = e.target;
		setSearchFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSearch = (e, selectedCategory) => {
		e.preventDefault();
		setSearchFormData((prevData) => ({
			...prevData,
			category: selectedCategory,
		}));
	};

	return (
		<>
			<header>
				<div className="tp-header-area p-relative z-index-11">
					<div className="tp-header-main tp-header-sticky">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-2 col-lg-2 col-md-4 col-6">
									<div className="logo">
										<Link to="/">
											<img src="assets/img/logo/logo.svg" alt="logo" />
										</Link>
									</div>
								</div>
								<div className="col-xl-6 col-lg-7 d-none d-lg-block">
									<div className="tp-header-search pl-70">
										<div className="tp-header-search-wrapper d-flex align-items-center">
											<div className="tp-header-search-box">
												<input
													type="text"
													name="search"
													value={searchFormData?.search || ""}
													onChange={(e) => handleFormDataInput(e)}
													placeholder="Search for Products..."
												/>
											</div>
											<div className="tp-header-search-category">
												<div className="nice-select" tabIndex={0}>
													<span className="current">Select Category</span>

													<ul className="list">
														<li data-value="Select Category" className="option selected">
															Select Category
														</li>
														{categories.map((category, index) => (
															<li onClick={(e) => handleSearch(e, category.label)} key={index} className="option">
																{category.label}
															</li>
														))}
													</ul>
												</div>
											</div>
											<div className="tp-header-search-btn">
												<button style={{ background: searchFormData.search !== "" ? "#0989ff" : "#4daaff" }}>
													<Link
														to={searchFormData.search !== "" && "/search"}
														state={{ search: searchFormData }}
														replace={true}
													>
														<svg
															width={20}
															height={20}
															viewBox="0 0 20 20"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															style={{ opacity: searchFormData.search !== "" ? "1" : ".6" }}
														>
															<path
																d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M19 19L14.65 14.65"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
													</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-4 col-lg-3 col-md-8 col-6">
									<div className="tp-header-main-right d-flex align-items-center justify-content-end">
										<div className="tp-header-login d-none d-lg-block">
											<Link to="/login" className="d-flex align-items-center">
												<div className="tp-header-login-icon">
													{user?.profileImage ? (
														<span className="d-flex justify-content-center ">
															<img
																alt="UserProfile"
																loading="lazy"
																className="w-100 h-100"
																src={`${import.meta.env.VITE_APP_API_URL}/user/image?filename=${
																	user?.profileImage
																}&width=500`}
																style={{ borderRadius: "50%", objectFit: "cover" }}
															/>
														</span>
													) : (
														<span className="">
															<i className="fa fa-user"></i>
														</span>
													)}
												</div>
												<div className="tp-header-login-content d-none d-xl-block">
													<span>{user && user.name ? `Hello, ${user.name}` : "Sign In"}</span>
													<h5 className="tp-header-login-title">
														<Link to="/user">Your Account</Link>
													</h5>
												</div>
											</Link>
										</div>

										<div className="tp-header-action d-flex align-items-center ml-50">
											{loggedIn && (
												<>
													<div className="tp-header-action-item d-none d-lg-block">
														<Link to="/wishlist" className="tp-header-action-btn">
															<svg
																width={22}
																height={20}
																viewBox="0 0 22 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M11.239 18.8538C13.4096 17.5179 15.4289 15.9456 17.2607 14.1652C18.5486 12.8829 19.529 11.3198 20.1269 9.59539C21.2029 6.25031 19.9461 2.42083 16.4289 1.28752C14.5804 0.692435 12.5616 1.03255 11.0039 2.20148C9.44567 1.03398 7.42754 0.693978 5.57894 1.28752C2.06175 2.42083 0.795919 6.25031 1.87187 9.59539C2.46978 11.3198 3.45021 12.8829 4.73806 14.1652C6.56988 15.9456 8.58917 17.5179 10.7598 18.8538L10.9949 19L11.239 18.8538Z"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M7.26062 5.05302C6.19531 5.39332 5.43839 6.34973 5.3438 7.47501"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															{wishlist.length > 0 && (
																<span className="tp-header-action-badge">{wishlist?.length || "0"}</span>
															)}
														</Link>
													</div>
													<div className="tp-header-action-item">
														<Link to="/Cart" className="tp-header-action-btn cartmini-open-btn">
															<svg
																width={21}
																height={22}
																viewBox="0 0 21 22"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M6.48626 20.5H14.8341C17.9004 20.5 20.2528 19.3924 19.5847 14.9348L18.8066 8.89359C18.3947 6.66934 16.976 5.81808 15.7311 5.81808H5.55262C4.28946 5.81808 2.95308 6.73341 2.4771 8.89359L1.69907 14.9348C1.13157 18.889 3.4199 20.5 6.48626 20.5Z"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M6.34902 5.5984C6.34902 3.21232 8.28331 1.27803 10.6694 1.27803V1.27803C11.8184 1.27316 12.922 1.72619 13.7362 2.53695C14.5504 3.3477 15.0081 4.44939 15.0081 5.5984V5.5984"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M7.70365 10.1018H7.74942"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M13.5343 10.1018H13.5801"
																	stroke="currentColor"
																	strokeWidth="1.5"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
															</svg>
															{cartItems.length > 0 && (
																<span className="tp-header-action-badge">{cartItems?.length || "0"}</span>
															)}
														</Link>
													</div>
												</>
											)}
											<div className="tp-header-action-item d-lg-none ">
												<nav className="navbar" aria-label="Light offcanvas navbar">
													<div className="container-fluid">
														<button
															className="navbar-toggler tp-header-action-btn"
															type="button"
															data-bs-toggle="offcanvas"
															data-bs-target="#offcanvasNavbarLight"
															aria-controls="offcanvasNavbarLight"
														>
															<svg xmlns="http://www.w3.org/2000/svg" width={30} height={16} viewBox="0 0 30 16">
																<rect x={10} width={20} height={2} fill="currentColor" />
																<rect x={5} y={7} width={25} height={2} fill="currentColor" />
																<rect x={10} y={14} width={20} height={2} fill="currentColor" />
															</svg>
														</button>
														<div
															className="offcanvas offcanvas-end"
															tabIndex={-1}
															id="offcanvasNavbarLight"
															aria-labelledby="offcanvasNavbarLightLabel"
														>
															<div className="offcanvas-header">
																<a href="index.html">
																	<img src="assets/img/logo/logo.svg" alt="logo" />
																</a>
																<button
																	type="button"
																	className="btn-close"
																	data-bs-dismiss="offcanvas"
																	aria-label="Close"
																/>
															</div>
															<div className="offcanvas-body z-3">
																<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
																	<li className="nav-item">
																		<NavLink to="/" className="nav-link">
																			Home
																		</NavLink>
																	</li>
																	<li className="nav-item">
																		<NavLink to="/shop" className="nav-link">
																			Shop
																		</NavLink>
																	</li>
																	<li className="nav-item">
																		<NavLink className="nav-link">Products</NavLink>
																	</li>
																	<li className="nav-item">
																		<NavLink className="nav-link">Coupons</NavLink>
																	</li>
																	<li className="nav-item">
																		<NavLink className="nav-link">About</NavLink>
																	</li>
																	<li className="nav-item">
																		<NavLink to="/contact" className="nav-link">
																			Contact
																		</NavLink>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* header bottom start */}
					<div className="tp-header-bottom tp-header-bottom-border d-none d-lg-block">
						<div className="container">
							<div className="tp-mega-menu-wrapper p-relative">
								<div className="row align-items-center">
									<div className="col-xl-3 col-lg-3">
										<div className="tp-header-category tp-category-menu tp-header-category-toggle">
											<button className="tp-category-menu-btn tp-category-menu-toggle">
												<span>
													<svg
														width={18}
														height={14}
														viewBox="0 0 18 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H1Z"
															fill="currentColor"
														/>
													</svg>
												</span>
												All Departments
											</button>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6">
										<div className="main-menu menu-style-1">
											<nav className="tp-main-menu-content">
												<ul>
													<li>
														<NavLink to="/">Home</NavLink>
													</li>
													<li>
														<NavLink to="/shop">Shop</NavLink>
													</li>
													<li>
														<NavLink to="/">Products</NavLink>
													</li>
													<li>
														<NavLink to="/">Coupons</NavLink>
													</li>
													<li>
														<NavLink to="/">About</NavLink>
													</li>
													<li>
														<NavLink to="/contact" className="nav-link">
															Contact
														</NavLink>
													</li>
												</ul>
											</nav>
										</div>
									</div>
									<div className="col-xl-3 col-lg-3">
										<div className="tp-header-contact d-flex align-items-center justify-content-end">
											<div className="tp-header-contact-icon">
												<span>
													<svg
														width={21}
														height={20}
														viewBox="0 0 21 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M1.96977 3.24859C2.26945 2.75144 3.92158 0.946726 5.09889 1.00121C5.45111 1.03137 5.76246 1.24346 6.01544 1.49057H6.01641C6.59631 2.05874 8.26011 4.203 8.35352 4.65442C8.58411 5.76158 7.26378 6.39979 7.66756 7.5157C8.69698 10.0345 10.4707 11.8081 12.9908 12.8365C14.1058 13.2412 14.7441 11.9219 15.8513 12.1515C16.3028 12.2459 18.4482 13.9086 19.0155 14.4894V14.4894C19.2616 14.7414 19.4757 15.0537 19.5049 15.4059C19.5487 16.6463 17.6319 18.3207 17.2583 18.5347C16.3767 19.1661 15.2267 19.1544 13.8246 18.5026C9.91224 16.8749 3.65985 10.7408 2.00188 6.68096C1.3675 5.2868 1.32469 4.12906 1.96977 3.24859Z"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M12.936 1.23685C16.4432 1.62622 19.2124 4.39253 19.6065 7.89874"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M12.936 4.59337C14.6129 4.92021 15.9231 6.23042 16.2499 7.90726"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
											</div>
											<div className="tp-header-contact-content">
												<h5>Hotline:</h5>
												<p>
													<a href="tel:402-763-282-46">+(402) 763 282 46</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
