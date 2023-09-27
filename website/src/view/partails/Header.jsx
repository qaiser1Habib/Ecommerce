const Header = () => {
	return (
		<header className="site-header mo-left header style-2">
			{/* Main Header */}
			<div className="header-info-bar">
				<div className="container clearfix">
					{/* Website Logo */}
					<div className="logo-header logo-dark">
						<a href="index.html">
							<img src="assets/images/exclsvLogo.png" alt="logo" />
						</a>
					</div>
					{/* EXTRA NAV */}
					<div className="extra-nav d-md-flex d-none">
						<div className="extra-cell">
							<ul className="navbar-nav header-right">
								<li className="nav-item info-box pe-3 d-xl-flex d-none">
									<div className="nav-link">
										<div className="dz-icon">
											<i className="flaticon flaticon-ship" />
										</div>
										<div className="info-content">
											<span>FREE</span>
											<h6 className="title mb-0">Shipping</h6>
										</div>
									</div>
								</li>
								<li className="nav-item info-box ">
									<div className="nav-link">
										<div className="dz-icon">
											<i className="flaticon flaticon-call-center" />
										</div>
										<div className="info-content">
											<span>24/7 SUPPORT</span>
											<h6 className="title mb-0">+00 099 321 312</h6>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					{/* header search nav */}
					<div className="header-search-nav">
						<form className="header-item-search">
							<div className="input-group search-input">
								<select className="default-select">
									<option>All Categories</option>
									<option>Photography </option>
									<option>Arts</option>
									<option>Adventure</option>
									<option>Action</option>
									<option>Games</option>
									<option>Movies</option>
									<option>Comics</option>
									<option>Biographies</option>
									<option>Children’s Books</option>
									<option>Historical</option>
									<option>Contemporary</option>
									<option>Classics</option>
									<option>Education</option>
								</select>
								<input
									type="text"
									className="form-control"
									aria-label="Text input with dropdown button"
									placeholder="Search for products"
								/>
								<button className="btn" type="button">
									<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle
											cx="10.0535"
											cy="10.5399"
											r="7.49047"
											stroke="#0D775E"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M15.2632 16.1387L18.1999 19.0677"
											stroke="#0D775E"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* Main Header End */}

			{/* Main Header */}
			<div className="sticky-header main-bar-wraper navbar-expand-lg">
				<div className="main-bar dark clearfix">
					<div className="container clearfix">
						{/* Website Logo */}
						<div className="logo-header logo-dark">
							<a href="index.html">
								<img src="assets/images/logo.svg" alt="logo" />
							</a>
						</div>
						{/* Nav Toggle Button */}
						<button
							className="navbar-toggler collapsed navicon justify-content-end"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span />
							<span />
							<span />
						</button>
						{/* EXTRA NAV */}
						<div className="extra-nav">
							<div className="extra-cell">
								<ul className="header-right">
									<li className="nav-item login-link">
										<a className="nav-link" href="shop-my-account.html">
											LOGIN / REGISTER
										</a>
									</li>
									<li className="nav-item search-link">
										<a
											className="nav-link"
											href="javascript:void(0);"
											data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasTop"
											aria-controls="offcanvasTop"
										>
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle
													cx="10.0535"
													cy="10.55"
													r="7.49047"
													stroke="var(--white)"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M15.2632 16.1487L18.1999 19.0778"
													stroke="var(--white)"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</a>
									</li>
									<li className="nav-item wishlist-link">
										<a
											className="nav-link"
											href="javascript:void(0);"
											data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasRight"
											aria-controls="offcanvasRight"
										>
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M2.64119 10.4097C1.74702 7.61808 2.79202 4.42724 5.72285 3.48308C7.26452 2.98558 8.96619 3.27891 10.2479 4.24308C11.4604 3.30558 13.2245 2.98891 14.7645 3.48308C17.6954 4.42724 18.747 7.61808 17.8537 10.4097C16.462 14.8347 10.2479 18.2431 10.2479 18.2431C10.2479 18.2431 4.07952 14.8864 2.64119 10.4097Z"
													stroke="var(--white)"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M13.5813 6.32781C14.473 6.61614 15.103 7.41197 15.1788 8.34614"
													stroke="var(--white)"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</a>
									</li>
									<li className="nav-item cart-link">
										<a
											href="javascript:void(0);"
											className="nav-link cart-btn"
											data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasRight"
											aria-controls="offcanvasRight"
										>
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M1.08374 2.61947C1.08374 2.27429 1.36356 1.99447 1.70874 1.99447H3.29314C3.91727 1.99447 4.4722 2.39163 4.67352 2.98239L5.06379 4.1276H15.4584C17.6446 4.1276 19.4168 5.89981 19.4168 8.08593V11.5379C19.4168 13.7241 17.6446 15.4963 15.4584 15.4963H9.22182C7.30561 15.4963 5.66457 14.1237 5.32583 12.2377L4.00967 4.90953L3.49034 3.3856C3.46158 3.30121 3.3823 3.24447 3.29314 3.24447H1.70874C1.36356 3.24447 1.08374 2.96465 1.08374 2.61947ZM5.36374 5.3776L6.55614 12.0167C6.78791 13.3072 7.91073 14.2463 9.22182 14.2463H15.4584C16.9542 14.2463 18.1668 13.0337 18.1668 11.5379V8.08593C18.1668 6.59016 16.9542 5.3776 15.4584 5.3776H5.36374Z"
													fill="var(--white)"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M8.16479 17.8278C8.16479 17.1374 8.72444 16.5778 9.4148 16.5778H9.42313C10.1135 16.5778 10.6731 17.1374 10.6731 17.8278C10.6731 18.5182 10.1135 19.0778 9.42313 19.0778H9.4148C8.72444 19.0778 8.16479 18.5182 8.16479 17.8278Z"
													fill="var(--white)"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M14.8315 17.8278C14.8315 17.1374 15.3912 16.5778 16.0815 16.5778H16.0899C16.7802 16.5778 17.3399 17.1374 17.3399 17.8278C17.3399 18.5182 16.7802 19.0778 16.0899 19.0778H16.0815C15.3912 19.0778 14.8315 18.5182 14.8315 17.8278Z"
													fill="var(--white)"
												/>
											</svg>
											<span className="badge badge-circle">5</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* Main Nav */}
						<div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
							<div className="logo-header">
								<a href="index.html">
									<img src="images/logo.svg" alt="" />
								</a>
							</div>
							<div className="browse-category-menu">
								<a href="javascript:void(0);" className="category-btn">
									<svg
										className="me-3"
										width={21}
										height={13}
										viewBox="0 0 21 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect x="0.248047" y={12} width={20} height={1} fill="white" />
										<rect x="0.248047" width={20} height={1} fill="white" />
										<rect x="0.248047" y={6} width={20} height={1} fill="white" />
									</svg>
									<span className="category-btn-title">Browse Categories</span>
									<span className="toggle-arrow ms-auto">
										<svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M6.24805 9L12.248 15L18.248 9"
												stroke="white"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
								</a>
								<div className="category-menu-items" style={{ display: "none" }}>
									<ul className="nav navbar-nav">
										<li className="has-mega-menu cate-drop">
											<a href="javascript:void(0);">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_12)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_82">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Bamboo Products</span>
												<span className="menu-icon">
													<svg
														width={16}
														height={16}
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M6 12L10 8L6 4"
															stroke="#24262B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
											</a>
											<div className="mega-menu">
												<div className="row">
													<div className="col-md-3 col-sm-4 col-6">
														<a href="javascript:void(0);" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">
																	Security Systems
																	<span className="badge bg-primary">NEW</span>
																</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Blinds And Shades</a>
															</li>
															<li>
																<a href="shop-standard.html">Water Monitors</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Blinds And Shades</a>
															</li>
															<li>
																<a href="shop-standard.html">Water Monitors</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														{" "}
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Blinds And Shades</a>
															</li>
															<li>
																<a href="shop-standard.html">
																	Water Monitors
																	<span className="badge bg-red">Offer</span>
																</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														{" "}
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">
																	Lighting
																	<span className="badge bg-secondary">Exclusive</span>
																</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Blinds And Shades</a>
															</li>
															<li>
																<a href="shop-standard.html">Water Monitors</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">
																	Lighting
																	<span className="badge bg-orange">Feture</span>
																</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														{" "}
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">
																	Locks<span className="badge bg-purple">SALE</span>
																</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Blinds And Shades</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														{" "}
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Entertainment Systems</a>
															</li>
														</ul>
													</div>
													<div className="col-md-3 col-sm-4 col-6">
														{" "}
														<a href="shop-standard.html" className="menu-title">
															Smart Home Products
														</a>
														<ul>
															<li>
																<a href="shop-standard.html">Thermostats</a>
															</li>
															<li>
																<a href="shop-standard.html">Lighting</a>
															</li>
															<li>
																<a href="shop-standard.html">Security Systems</a>
															</li>
															<li>
																<a href="shop-standard.html">Locks</a>
															</li>
															<li>
																<a href="shop-standard.html">Home Assistants</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li className="cate-drop">
											<a href="javascript:void(0);">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_182)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_14822">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Fitness Trackers</span>
												<span className="menu-icon">
													<svg
														width={16}
														height={16}
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M6 12L10 8L6 4"
															stroke="#24262B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
											</a>
											<ul className="sub-menu">
												<li>
													<a href="shop-standard.html">Thermostats</a>
												</li>
												<li>
													<a href="shop-standard.html">Lighting</a>
												</li>
												<li>
													<a href="shop-standard.html">Security Systems</a>
												</li>
												<li>
													<a href="shop-standard.html">Locks</a>
												</li>
												<li>
													<a href="shop-standard.html">Home Assistants</a>
												</li>
												<li>
													<a href="shop-standard.html">Entertainment Systems</a>
												</li>
												<li>
													<a href="shop-standard.html">Blinds And Shades</a>
												</li>
												<li>
													<a href="shop-standard.html">Appliances</a>
												</li>
												<li>
													<a href="shop-standard.html">Water Monitors</a>
												</li>
												<li>
													<a href="shop-standard.html">Gardening Systems</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_14821)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_02">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Protein Supplements</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_2)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_14825">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Fitness Equipment</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_14826)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_14827">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Reusable Bags</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_10_1482)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_0_1482">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Water Bottles </span>
												<span className="badge bg-purple">SALE</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_90_1482)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_14">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Home Assistants</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_14829)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_90_12">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Water Monitors</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_1236)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip_0_1482">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Baby Monitors</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_18)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_99">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Convertible Car Seats</span>
											</a>
										</li>
										<li>
											<a href="shop-standard.html">
												<svg
													className="me-3"
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<g clipPath="url(#clip0_190_10)">
														<path
															d="M9.64305 2.11035L9.06095 2.76886L14.1811 7.2949H0.748047V8.17381H14.1811L9.06095 12.6999L9.64305 13.3584L15.748 7.96173V7.50698L9.64305 2.11035Z"
															fill="#0D775E"
														/>
													</g>
													<defs>
														<clipPath id="clip0_190_11">
															<rect width={15} height={15} fill="white" transform="translate(0.748047 0.234375)" />
														</clipPath>
													</defs>
												</svg>
												<span>Convertible Car Seats</span>
											</a>
										</li>
										<li className="menu-items">
											<a href="javascript:void(0);">
												<img className="me-3" src="images/svg/menu.svg" alt="" />
												<span>More Products</span>
												<span className="menu-icon">
													<svg
														width={16}
														height={16}
														viewBox="0 0 16 16"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M6 12L10 8L6 4"
															stroke="#24262B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<ul className="nav navbar-nav dark-nav">
								<li className="has-mega-menu">
									<a>
										<span>Home</span>
									</a>
								</li>
								<li className="has-mega-menu">
									<a>
										<span>Shop</span>
									</a>
								</li>

								<li className="sub-menu">
									<a>
										<span>About Us</span>
									</a>
								</li>
								<li>
									<a href="">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* Main Header End */}
			{/* SearchBar */}
			<div className="dz-search-area dz-offcanvas offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop">
				<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
					×
				</button>
				<div className="container">
					<form className="header-item-search">
						<div className="input-group search-input">
							<div className="dropdown bootstrap-select default-select">
								<select className="default-select">
									<option>All Categories</option>
									<option>Wooden Bottles </option>
									<option>Wooden Furniture</option>
									<option>Metal Utensils</option>
									<option>Wooden Utensils</option>
									<option>Baby Products</option>
									<option>Yoga Mats</option>
									<option>Eco-Friendly</option>
									<option>Children Strollers</option>
									<option>Bamboo products</option>
									<option>Healthy Products</option>
									<option>Luxury Couch</option>
									<option>Video Instructors</option>
								</select>
								<button
									type="button"
									tabIndex={-1}
									className="btn dropdown-toggle btn-light"
									data-bs-toggle="dropdown"
									role="combobox"
									aria-owns="bs-select-2"
									aria-haspopup="listbox"
									aria-expanded="false"
									title="All Categories"
								>
									<div className="filter-option">
										<div className="filter-option-inner">
											<div className="filter-option-inner-inner">All Categories</div>
										</div>{" "}
									</div>
								</button>
								<div className="dropdown-menu ">
									<div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}>
										<ul className="dropdown-menu inner show" role="presentation" />
									</div>
								</div>
							</div>
							<input
								type="text"
								className="form-control"
								aria-label="Text input with dropdown button"
								placeholder="Search Product"
							/>
							<button className="btn" type="button">
								<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle
										cx="10.0535"
										cy="10.5399"
										r="7.49047"
										stroke="#0D775E"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M15.2632 16.1387L18.1999 19.0677"
										stroke="#0D775E"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
						</div>
						<ul className="recent-tag">
							<li className="pe-0">
								<span>Quick Search :</span>
							</li>
							<li>
								<a href="shop-list.html">Wooden Products</a>
							</li>
							<li>
								<a href="shop-list.html">Metal Products</a>
							</li>
							<li>
								<a href="shop-list.html">Baby Products</a>
							</li>
							<li>
								<a href="shop-list.html">Yoga Mats</a>
							</li>
						</ul>
					</form>
					<div className="row">
						<div className="col-xl-12">
							<h5 className="mb-3">You May Also Like</h5>
							<div className="swiper category-swiper2 swiper-initialized swiper-horizontal swiper-pointer-events">
								<div
									className="swiper-wrapper"
									id="swiper-wrapper-fd59b13b6e101c54d"
									aria-live="off"
									style={{
										transform: "translate3d(-1425px, 0px, 0px)",
										transitionDuration: "0ms",
									}}
								>
									<div
										className="swiper-slide swiper-slide-duplicate"
										role="group"
										aria-label="5 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={4}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/5.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Bamboo toothbrushes</a>
												</h6>
												<h6 className="price">$70.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate"
										role="group"
										aria-label="6 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={5}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/6.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Eco friendly bags</a>
												</h6>
												<h6 className="price">$45.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate"
										role="group"
										aria-label="7 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={6}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/7.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Bottles</a>
												</h6>
												<h6 className="price">$40.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate"
										role="group"
										aria-label="8 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={7}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/4.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Paper Bags</a>
												</h6>
												<h6 className="price">$60.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide"
										role="group"
										aria-label="1 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={0}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/1.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Water Bottles</a>
												</h6>
												<h6 className="price">$40.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-prev"
										role="group"
										aria-label="2 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={1}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/3.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Bamboo toothbrushes</a>
												</h6>
												<h6 className="price">$30.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-active"
										role="group"
										aria-label="3 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={2}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/4.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Eco friendly bags</a>
												</h6>
												<h6 className="price">$35.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-next"
										role="group"
										aria-label="4 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={3}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/2.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Cup</a>
												</h6>
												<h6 className="price">$20.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide"
										role="group"
										aria-label="5 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={4}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/5.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Bamboo toothbrushes</a>
												</h6>
												<h6 className="price">$70.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide"
										role="group"
										aria-label="6 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={5}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/6.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Eco friendly bags</a>
												</h6>
												<h6 className="price">$45.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide"
										role="group"
										aria-label="7 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={6}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/7.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Bottles</a>
												</h6>
												<h6 className="price">$40.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide"
										role="group"
										aria-label="8 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={7}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/4.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Paper Bags</a>
												</h6>
												<h6 className="price">$60.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate"
										role="group"
										aria-label="1 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={0}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/1.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Water Bottles</a>
												</h6>
												<h6 className="price">$40.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
										role="group"
										aria-label="2 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={1}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/3.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Bamboo toothbrushes</a>
												</h6>
												<h6 className="price">$30.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
										role="group"
										aria-label="3 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={2}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/4.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Eco friendly bags</a>
												</h6>
												<h6 className="price">$35.00</h6>
											</div>
										</div>
									</div>
									<div
										className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
										role="group"
										aria-label="4 / 8"
										style={{ width: "217.5px", marginRight: 20 }}
										data-swiper-slide-index={3}
									>
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/2.png" alt="image" />
											</div>
											<div className="dz-content">
												<h6 className="title">
													<a href="shop-list.html">Wooden Cup</a>
												</h6>
												<h6 className="price">$20.00</h6>
											</div>
										</div>
									</div>
								</div>
								<span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SearchBar */}
			{/* Sidebar cart */}
			<SidebarCart />
			{/* Sidebar cart */}
		</header>
	);
};

const SidebarCart = () => {
	return (
		<div className="offcanvas dz-offcanvas offcanvas offcanvas-end " tabIndex={-1} id="offcanvasRight">
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
				×
			</button>
			<div className="offcanvas-body">
				<div className="product-description">
					<div className="dz-tabs">
						<ul className="nav nav-tabs center" id="myTab" role="tablist">
							<li className="nav-item" role="presentation">
								<button
									className="nav-link active"
									id="shopping-cart"
									data-bs-toggle="tab"
									data-bs-target="#shopping-cart-pane"
									type="button"
									role="tab"
									aria-controls="shopping-cart-pane"
									aria-selected="true"
								>
									Shopping Cart
									<span className="badge badge-light">5</span>
								</button>
							</li>
							<li className="nav-item" role="presentation">
								<button
									className="nav-link"
									id="wishlist"
									data-bs-toggle="tab"
									data-bs-target="#wishlist-pane"
									type="button"
									role="tab"
									aria-controls="wishlist-pane"
									aria-selected="false"
								>
									Wishlist
									<span className="badge badge-light">2</span>
								</button>
							</li>
						</ul>
						<div className="tab-content pt-4" id="dz-shopcart-sidebar">
							<div
								className="tab-pane fade show active"
								id="shopping-cart-pane"
								role="tabpanel"
								aria-labelledby="shopping-cart"
								tabIndex={0}
							>
								<div className="shop-sidebar-cart">
									<ul className="sidebar-cart-list">
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic1.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Wooden Water Bottles</a>
													</h6>
													<div className="d-flex align-items-center">
														<div className="btn-quantity light quantity-sm me-3">
															<input type="text" defaultValue={1} name="demo_vertical2" />
														</div>
														<h6 className="dz-price text-primary mb-0">$50.00</h6>
													</div>
												</div>
												<a href="javascript:void(0);" className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic2.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Bamboo Cups</a>
													</h6>
													<div className="d-flex align-items-center">
														<div className="btn-quantity light quantity-sm me-3">
															<input type="text" defaultValue={1} name="demo_vertical2" />
														</div>
														<h6 className="dz-price text-primary mb-0">$40.00</h6>
													</div>
												</div>
												<a href="javascript:void(0);" className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic3.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Wooden Toothbrushes</a>
													</h6>
													<div className="d-flex align-items-center">
														<div className="btn-quantity light quantity-sm me-3">
															<input type="text" defaultValue={1} name="demo_vertical2" />
														</div>
														<h6 className="dz-price text-primary mb-0">$65.00</h6>
													</div>
												</div>
												<a href="javascript:void(0);" className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
									</ul>
									<div className="cart-total">
										<h5 className="mb-0">Subtotal:</h5>
										<h5 className="mb-0">300.00$</h5>
									</div>
									<div className="mt-auto">
										<div className="shipping-time">
											<div className="dz-icon">
												<i className="flaticon flaticon-ship" />
											</div>
											<div className="shipping-content">
												<h6 className="title pe-4">Congratulations , you've got free shipping!</h6>
												<div className="progress">
													<div
														className="progress-bar progress-animated border-0"
														style={{ width: "75%" }}
														role="progressbar"
													>
														<span className="sr-only">75% Complete</span>
													</div>
												</div>
											</div>
										</div>
										<a href="shop-checkout.html" className="btn btn-light btn-block m-b20">
											Checkout
										</a>
										<a href="shop-cart.html" className="btn btn-secondary btn-block">
											View Cart
										</a>
									</div>
								</div>
							</div>
							<div className="tab-pane fade" id="wishlist-pane" role="tabpanel" aria-labelledby="wishlist" tabIndex={0}>
								<div className="shop-sidebar-cart">
									<ul className="sidebar-cart-list">
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic1.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Wooden Water Bottles</a>
													</h6>
													<div className="d-flex align-items-center">
														<h6 className="dz-price text-primary mb-0">$50.00</h6>
													</div>
												</div>
												<a className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic2.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Wooden Cup</a>
													</h6>
													<div className="d-flex align-items-center">
														<h6 className="dz-price text-primary mb-0">$40.00</h6>
													</div>
												</div>
												<a href="javascript:void(0);" className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
										<li>
											<div className="cart-widget">
												<div className="dz-media me-3">
													<img src="/assets/images/shop/shop-cart/pic3.jpg" alt="" />
												</div>
												<div className="cart-content">
													<h6 className="title">
														<a href="product-thumbnail.html">Bamboo toothbrushes</a>
													</h6>
													<div className="d-flex align-items-center">
														<h6 className="dz-price text-primary mb-0">$65.00</h6>
													</div>
												</div>
												<a href="javascript:void(0);" className="dz-close">
													<i className="ti-close" />
												</a>
											</div>
										</li>
									</ul>
									<div className="mt-auto">
										<a href="shop-wishlist.html" className="btn btn-secondary btn-block">
											Check Your Favourite
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
