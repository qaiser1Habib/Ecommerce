import { useState, useEffect, useRef, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef(null);

	const closeDropdown = () => {
		setShowDropdown(false);
	};

	const toggleDropdown = (e) => {
		e.stopPropagation();
		setShowDropdown((prevShowDropdown) => !prevShowDropdown);
	};

	useEffect(() => {
		const handleOutsideClick = (e) => {
			e.stopPropagation();
			if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !e.target.classList.contains("menu-dropdown")) {
				closeDropdown();
			}
		};

		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<Fragment>
			<div className="container-fluid py-2 position-relative">
				<div className="container-xxl d-flex flex-grow-1 flex-stack">
					<div className="d-flex align-items-center me-5">
						<Link to="/">
							<img alt="Logo" src="/assets/basketball/logo.jpeg" className="w-100px" />
						</Link>
					</div>

					<div className="app-navbar-item" id="kt_header_user_menu_toggle">
						<div
							className="rounded btn-flex align-items-center bg-hover-white bg-hover-opacity-10 py-2 ps-3 pe-1"
							data-kt-menu-trigger="click"
							data-kt-menu-attach="parent"
							data-kt-menu-placement="bottom-end"
							onClick={toggleDropdown}
							style={{ position: "relative" }}
						>
							<div className="d-flex align-items-center flex-shrink-0">
								<div className="d-flex align-items-center ms-3 ms-lg-4" id="kt_header_user_menu_toggle">
									<div className="d-none d-md-flex flex-column align-items-end justify-content-center me-2 me-md-4">
										<span className="text-dark fs-8 fw-bold lh-1 mb-1 ">Max</span>
										<span className="text-dark fs-8 opacity-75 fw-semibold lh-1">UX Designer</span>
									</div>

									<div
										className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px show menu-dropdown"
										onClick={toggleDropdown}
									>
										<span className="svg-icon svg-icon-1">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path
													d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
													fill="black"
												/>
												<rect opacity="0.3" x={8} y={3} width={8} height={8} rx={4} fill="black" />
											</svg>
										</span>
									</div>

									{showDropdown && (
										<div
											className=" menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px show"
											data-kt-menu="true"
											data-popper-placement="bottom-end"
											ref={dropdownRef}
										>
											<div className="menu-item px-3">
												<div className="menu-content d-flex align-items-center px-3">
													<div className="symbol symbol-50px me-5">
														<img alt="Logo" src="/assets/adminPanel/media/avatars/300-1.jpg" />
													</div>

													<div className="d-flex flex-column">
														<div>
															<span className="fw-bolder d-flex align-items-center fs-5 badge badge-light-success px-2 py-1">
																Super Admin
															</span>
														</div>
														<a href="#" className="fw-bold text-muted text-hover-primary fs-7">
															admin@dashboard.com
														</a>
													</div>
												</div>
											</div>
											<div className="separator my-2" />

											<div className="menu-item px-5">
												<Link to="/profile" className="menu-link px-5">
													My Profile
												</Link>
											</div>

											<div className="separator my-2" />

											<div className="menu-item px-5">
												<Link to="login" className="menu-link px-5">
													Sign Out
												</Link>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid px-0" style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, .07)" }}>
				<nav className="navbar navbar-expand-lg   py-5" aria-label="Light offcanvas navbar">
					<div className="container-xl">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="offcanvas offcanvas-start "
							tabIndex="-1"
							id="offcanvasNavbar"
							aria-labelledby="offcanvasNavbarLabel"
						>
							<div className="offcanvas-header">
								<Link to="/admin-panel/dashboard">
									<img alt="Logo" src="/assets/basketball/logo.jpeg" className="h-80px" />
								</Link>
								<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
							</div>
							<div className="offcanvas-body">
								<ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
									<li className="nav-item">
										<NavLink to="/">Dashboard</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/banners">Banners</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/products">Products</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/categories">Categories</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/user">Users</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/order">Orders</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</Fragment>
	);
};

export default Header;
