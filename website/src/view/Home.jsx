const Home = () => {
	return (
		<div className="page-content bg-white">
			{/*Swiper Banner Start */}
			<div className="main-slider style-2">
				<div className="main-swiper">
					<div className="swiper-wrapper">
						<div className="swiper-slide bg-light">
							<div className="container">
								<div className="banner-content">
									<div className="row">
										<div className="col-xl-6 col-md-6 col-sm-7 align-self-center">
											<div className="swiper-content">
												<div className="content-info">
													<h1 className="offer-title mb-0" data-swiper-parallax={-20}>
														SALE 50%
													</h1>
													<h2 className="title mb-2" data-swiper-parallax={-20}>
														For Meditation, yoga, Asana.
													</h2>
													<p className="sub-title mb-0" data-swiper-parallax={-40}>
														No code need. Plus free shippng on $99+ orders!
													</p>
												</div>
												<div className="content-btn" data-swiper-parallax={-60}>
													<a className="btn btn-secondary  me-3" href="shop-cart.html">
														ADD TO CART
													</a>
													<a className="btn btn-outline-secondary " href="product-default.html">
														VIEW DETAILS
													</a>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-md-6 col-sm-5">
											<div className="banner-media">
												<div className="img-preview" data-swiper-parallax={-100}>
													<img src="/assets/images/main-slider/slider2/pic1.jpg" alt="banner-media" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="swiper-slide bg-light">
							<div className="container">
								<div className="banner-content">
									<div className="row">
										<div className="col-xl-6 col-md-6 col-sm-7 align-self-center">
											<div className="swiper-content">
												<div className="content-info">
													<h1 className="offer-title mb-0" data-swiper-parallax={-20}>
														SALE 40%
													</h1>
													<h2 className="title mb-2" data-swiper-parallax={-20}>
														For Gym, yoga, running.
													</h2>
													<p className="sub-title mb-0" data-swiper-parallax={-40}>
														No code need. Plus free shippng on $99+ orders!
													</p>
												</div>
												<div className="content-btn" data-swiper-parallax={-60}>
													<a className="btn btn-secondary  me-3" href="shop-cart.html">
														ADD TO CART
													</a>
													<a className="btn btn-outline-secondary " href="product-default.html">
														VIEW DETAILS
													</a>
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-md-6 col-sm-5">
											<div className="banner-media">
												<div className="img-preview" data-swiper-parallax={-100}>
													<img src="/assets/images/main-slider/slider2/pic2.jpg" alt="banner-media" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="banner-social-media style-2 left">
						<ul>
							<li>
								<a href="javascript:void(0);">
									Instagram
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									Facebook
								</a>
							</li>
							<li>
								<a href="javascript:void(0);">
									twitter
								</a>
							</li>
						</ul>
					</div>
					<a href="contact-us-1.html" className="service-btn btn-dark">
						Let’s talk
					</a>
				</div>
			</div>
			{/*Swiper Banner End*/}
			{/* Product Start*/}
			<section className="content-inner-1 py-0 overlay-white-middle">
				<div className="container-fluid p-3">
					<div className="swiper swiper-product">
						<div className="swiper-wrapper product-style2">
							<div className="swiper-slide">
								<div
									className="product-box style-2 wow fadeInUp"
									data-wow-delay="0.1s"
									style={{ backgroundImage: 'url("/assets/images/gym/1.png")' }}
								>
									<div className="product-content">
										<div className="main-content">
											<h2 className="product-name">Home fitness equipment</h2>
											<span className="offer">UP TO 60% OFF</span>
										</div>
										<a href="shop-list.html" className="btn btn-outline-secondary">
											Shop Now
										</a>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div
									className="product-box style-2 wow fadeInUp"
									data-wow-delay="0.2s"
									style={{ backgroundImage: 'url("/assets/images/gym/2.png")' }}
								>
									<div className="product-content">
										<div className="main-content">
											<h2 className="product-name">Yoga mats and accessories</h2>
											<span className="offer">UP TO 60% OFF</span>
										</div>
										<a href="shop-list.html" className="btn btn-outline-secondary">
											Shop Now
										</a>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div
									className="product-box style-2 wow fadeInUp"
									data-wow-delay="0.3s"
									style={{ backgroundImage: 'url("/assets/images/gym/3.png")' }}
								>
									<div className="product-content">
										<div className="main-content">
											<h2 className="product-name">Plant-based protein supplements</h2>
											<span className="offer">UP TO 60% OFF</span>
										</div>
										<a href="shop-list.html" className="btn btn-outline-secondary">
											Shop Now
										</a>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div
									className="product-box style-2 wow fadeInUp"
									data-wow-delay="0.4s"
									style={{ backgroundImage: 'url("/assets/images/gym/4.png")' }}
								>
									<div className="product-content">
										<div className="main-content">
											<h2 className="product-name">Nike Sports shoes</h2>
											<span className="offer">UP TO 60% OFF</span>
										</div>
										<a href="shop-list.html" className="btn btn-outline-secondary">
											Shop Now
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Product End*/}
			{/*Featured Section Start*/}
			<section className="content-inner overlay-white-middle">
				<div className="container">
					<div className="section-head style-2 wow fadeInUp" data-wow-delay="0.1s">
						<div className="left-content">
							<h2 className="title">Featured Categories</h2>
							<p>Discover the most trending products in Mooncart.</p>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">
							See all products
							<i className="icon feather icon-chevron-right font-18" />
						</a>
					</div>
					<div className="row gx-xl-4 g-3">
						<div className="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
							<div className="category-product left">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic1.jpg" alt="" />
									<div className="category-badge">Exercise Ball</div>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
							<div className="category-product left">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic2.jpg" alt="" />
									<div className="category-badge">Fitness trackers</div>
								</a>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
							<div className="category-product left">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic3.jpg" alt="" />
									<div className="category-badge">Yoga Ring</div>
								</a>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
							<div className="category-product right">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic4.jpg" alt="" />
									<div className="category-badge">Dumbbells</div>
								</a>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.6s">
							<div className="category-product right">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic5.jpg" alt="" />
									<div className="category-badge">Yoga mats</div>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp" data-wow-delay="0.7s">
							<div className="category-product right">
								<a href="javascript:void(0);">
									<img src="/assets/images/category/pic6.jpg" alt="" />
									<div className="category-badge">Protein</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Featured Section End*/}
			{/* icon-box1 */}
			<section
				className="content-inner-3 overlay-white-dark"
				style={{
					backgroundImage: 'url("/assets/images/background/bg2.jpg")',
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<div className="row justify-content-center gx-sm-1">
						<div className="col-lg-4 col-md-4 col-sm-4 p-b30 wow fadeInUp" data-wow-delay="0.1s">
							<div className="icon-bx-wraper style-1 text-center">
								<div className="icon-bx">
									<i className="flaticon flaticon-fast-delivery" />
								</div>
								<div className="icon-content">
									<h3 className="dz-title m-b0">FREE SHIPPING</h3>
									<div className="square" />
									<p className="font-20">Enjoy free shipping on all orders - no minimum purchase required.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 p-b30 wow fadeInUp" data-wow-delay="0.2s">
							<div className="icon-bx-wraper style-1 text-center">
								<div className="icon-bx">
									<i className="flaticon flaticon-message" />
								</div>
								<div className="icon-content">
									<h3 className="dz-title m-b0">24/7 SUPPORT</h3>
									<div className="square" />
									<p className="font-20">Our team is available 24/7 to help with any questions or concerns.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 p-b30 wow fadeInUp" data-wow-delay="0.3s">
							<div className="icon-bx-wraper style-1 text-center">
								<div className="icon-bx">
									<i className="flaticon flaticon-money-back-guarantee" />
								</div>
								<div className="icon-content">
									<h3 className="dz-title m-b0">MONEY BACK</h3>
									<div className="square" />
									<p className="font-20">We offer a 100% money-back guarantee for your satisfaction.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* icon-box1 End*/}
			{/* Tranding Start*/}
			<section className="content-inner-1 overlay-white-middle overflow-hidden">
				<div className="container">
					<div className="section-head style-2 wow fadeInUp" data-wow-delay="0.1s">
						<div className="left-content">
							<h2 className="title">What is trending now</h2>
							<p>Discover the most trending products in Mooncart.</p>
						</div>
						<a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">
							See all products
							<i className="icon feather icon-chevron-right font-18" />
						</a>
					</div>
					<div className="swiper-btn-center-lr">
						<div className="swiper swiper-four">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="shop-card wow fadeInUp" data-wow-delay="0.2s">
										<div className="dz-media">
											<img src="/assets/images/shop/product/9.png" alt="image" />
											<div className="shop-meta">
												<a
													href="javascript:void(0);"
													className="btn btn-secondary btn-icon"
													data-bs-toggle="modal"
													data-bs-target="#exampleModal"
												>
													<i className="fa-solid fa-eye d-md-none d-block" />
													<span className="d-md-block d-none">Quick View</span>
												</a>
												<div className="btn btn-primary meta-icon dz-wishicon">
													<svg
														className="dz-heart-fill"
														width={14}
														height={12}
														viewBox="0 0 14 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
															fill="white"
														/>
													</svg>
													<svg
														className="dz-heart feather feather-heart"
														xmlns="http://www.w3.org/2000/svg"
														width={14}
														height={14}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
													</svg>
												</div>
												<div className="btn btn-primary meta-icon dz-carticon">
													<svg
														className="dz-cart-check"
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
															stroke="white"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													<svg
														className="dz-cart-out"
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
															fill="white"
														/>
														<path
															d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
															fill="white"
														/>
														<path
															d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
															fill="white"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="dz-content">
											<h5 className="title">
												<a href="shop-list.html">Protein Supplements</a>
											</h5>
											<ul className="star-rating">
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
											</ul>
											<h6 className="price">
												<del>$85.00</del>
												$40.00
											</h6>
										</div>
										<div className="product-tag">
											<span className="badge badge-secondary">-31%</span>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="shop-card wow fadeInUp" data-wow-delay="0.3s">
										<div className="dz-media">
											<img src="/assets/images/shop/product/10.png" alt="image" />
											<div className="shop-meta">
												<a
													href="javascript:void(0);"
													className="btn btn-secondary btn-icon"
													data-bs-toggle="modal"
													data-bs-target="#exampleModal"
												>
													<i className="fa-solid fa-eye d-md-none d-block" />
													<span className="d-md-block d-none">Quick View</span>
												</a>
												<div className="btn btn-primary meta-icon dz-wishicon">
													<svg
														className="dz-heart-fill"
														width={14}
														height={12}
														viewBox="0 0 14 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
															fill="white"
														/>
													</svg>
													<svg
														className="dz-heart feather feather-heart"
														xmlns="http://www.w3.org/2000/svg"
														width={14}
														height={14}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
													</svg>
												</div>
												<div className="btn btn-primary meta-icon dz-carticon">
													<svg
														className="dz-cart-check"
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
															stroke="white"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													<svg
														className="dz-cart-out"
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
															fill="white"
														/>
														<path
															d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
															fill="white"
														/>
														<path
															d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
															fill="white"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="dz-content">
											<h5 className="title">
												<a href="shop-list.html">Yoga mats and accessories</a>
											</h5>
											<ul className="star-rating">
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
											</ul>
											<h6 className="price">
												<del>$55.00</del>
												$10.00
											</h6>
										</div>
										<div className="product-tag">
											<span className="badge badge-secondary">-20%</span>
											<span className="badge badge-primary">Featured</span>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="shop-card wow fadeInUp" data-wow-delay="0.4s">
										<div className="dz-media">
											<img src="/assets/images/shop/product/5.png" alt="image" />
											<div className="shop-meta">
												<a
													href="javascript:void(0);"
													className="btn btn-secondary btn-icon"
													data-bs-toggle="modal"
													data-bs-target="#exampleModal"
												>
													<i className="fa-solid fa-eye d-md-none d-block" />
													<span className="d-md-block d-none">Quick View</span>
												</a>
												<div className="btn btn-primary meta-icon dz-wishicon">
													<svg
														className="dz-heart-fill"
														width={14}
														height={12}
														viewBox="0 0 14 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
															fill="white"
														/>
													</svg>
													<svg
														className="dz-heart feather feather-heart"
														xmlns="http://www.w3.org/2000/svg"
														width={14}
														height={14}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
													</svg>
												</div>
												<div className="btn btn-primary meta-icon dz-carticon">
													<svg
														className="dz-cart-check"
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
															stroke="white"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													<svg
														className="dz-cart-out"
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
															fill="white"
														/>
														<path
															d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
															fill="white"
														/>
														<path
															d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
															fill="white"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="dz-content">
											<h5 className="title">
												<a href="shop-list.html">Bamboo toothbrushes</a>
											</h5>
											<ul className="star-rating">
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
											</ul>
											<h6 className="price">
												<del>$25.00</del>
												$10.00
											</h6>
										</div>
										<div className="product-tag">
											<span className="badge badge-secondary">Sale</span>
										</div>
									</div>
								</div>
								<div className="swiper-slide">
									<div className="shop-card wow fadeInUp" data-wow-delay="0.5s">
										<div className="dz-media">
											<img src="/assets/images/shop/product/11.png" alt="image" />
											<div className="shop-meta">
												<a
													href="javascript:void(0);"
													className="btn btn-secondary btn-icon"
													data-bs-toggle="modal"
													data-bs-target="#exampleModal"
												>
													<i className="fa-solid fa-eye d-md-none d-block" />
													<span className="d-md-block d-none">Quick View</span>
												</a>
												<div className="btn btn-primary meta-icon dz-wishicon">
													<svg
														className="dz-heart-fill"
														width={14}
														height={12}
														viewBox="0 0 14 12"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
															fill="white"
														/>
													</svg>
													<svg
														className="dz-heart feather feather-heart"
														xmlns="http://www.w3.org/2000/svg"
														width={14}
														height={14}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
													</svg>
												</div>
												<div className="btn btn-primary meta-icon dz-carticon">
													<svg
														className="dz-cart-check"
														width={15}
														height={15}
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
															stroke="white"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
													<svg
														className="dz-cart-out"
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
															fill="white"
														/>
														<path
															d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
															fill="white"
														/>
														<path
															d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
															fill="white"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div className="dz-content">
											<h5 className="title">
												<a href="shop-list.html">Fitness trackers</a>
											</h5>
											<ul className="star-rating">
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#FF8A00"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
												<li>
													<svg
														width={14}
														height={14}
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
															fill="#E4E5E8"
														/>
													</svg>
												</li>
											</ul>
											<h6 className="price">
												<del>$65.00</del>
												$20.00
											</h6>
										</div>
										<div className="product-tag">
											<span className="badge badge-secondary">-31%</span>
											<span className="badge badge-primary">Featured</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="pagination-align">
							<div className="tranding-button-prev btn-prev">
								<i className="flaticon flaticon-left-chevron" />
							</div>
							<div className="tranding-button-next btn-next">
								<i className="flaticon flaticon-chevron" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Tranding Stop*/}
			{/* Video Bx Start*/}
			<section
				className="content-inner overlay-black-light"
				style={{
					backgroundImage: 'url("/assets/images/background/bg3.jpg")',
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<div className="row align-items-center dz-content-bx style-1">
						<div className="col-xl-7 col-lg-7 m-b30 wow fadeInLeft" data-wow-delay="0.1s">
							<div className="dz-media video-bx1 dz-img-overlay1">
								<img src="/assets/images/video-img.png" alt="image" />
								<a href="https://www.youtube.com/watch?v=IT94xC35u6k" className="popup-youtube video-btn">
									<svg width={26} height={34} viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0.709318 2.07991C0.703817 0.454314 2.53706 -0.498418 3.86423 0.440304L24.3738 14.947C25.4952 15.7401 25.5017 17.4016 24.3866 18.2035L3.97574 32.8813C2.65517 33.8309 0.813587 32.8908 0.808083 31.2643L0.709318 2.07991Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 m-b30 wow fadeInRight" data-wow-delay="0.2s">
							<div className="inner-content">
								<div className="section-head">
									<h2 className="title">Enjoy the best quality and features made by MoonCart.</h2>
									<p className="max-w500">
										It is a long established fact that a reader will be distracted by the readable content of a page
										when looking at its layout. The point of using.
									</p>
								</div>
								<a href="shop-list.html" className="btn text-uppercase btn-outline-light me-3">
									Shop Now
								</a>
								<a href="product-default.html" className="btn text-uppercase btn-outline-light">
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Video Bx End*/}
			{/*Recommend Section Start*/}
			<section className="content-inner-1">
				<div className="container">
					<div className="row">
						<div className="col-xl-3">
							<div className="row">
								<div className="col-xl-12 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0.1s">
									<div className="offer-card text-center">
										<div className="dz-media">
											<img src="/assets/images/offer/pic1.jpg" alt="" />
										</div>
										<div className="offer-content">
											<h3 className="title">Yoga mats and accessories</h3>
											<span className="offer">UP TO 60% OFF</span>
											<a href="shop-list.html" className="btn btn-outline-secondary">
												Shop Now
											</a>
										</div>
									</div>
								</div>
								<div className="col-xl-12 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay="0.2s">
									<div className="offer-card text-center">
										<div className="dz-media">
											<img src="/assets/images/offer/pic2.jpg" alt="" />
										</div>
										<div className="offer-content">
											<h3 className="title">Plant-based protein supplements</h3>
											<span className="offer">UP TO 60% OFF</span>
											<a href="shop-list.html" className="btn btn-outline-secondary">
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-9">
							<div className="wow fadeInUp" data-wow-delay="0.3s">
								<h3 className="title">Most popular products</h3>
								<div className="site-filters clearfix d-flex align-items-center">
									<ul className="filters" data-bs-toggle="buttons">
										<li className="btn active">
											<input type="radio" />
											<a href="javascript:void(0);">
												All Products <span>(20)</span>
											</a>
										</li>
										<li data-filter=".Bottle" className="btn">
											<input type="radio" />
											<a href="javascript:void(0);">
												Bottle <span>(10)</span>
											</a>
										</li>
										<li data-filter=".Begs" className="btn">
											<input type="radio" />
											<a href="javascript:void(0);">
												Begs <span>(02)</span>
											</a>
										</li>
										<li data-filter=".Toothbrushes" className="btn">
											<input type="radio" />
											<a href="javascript:void(0);">
												Toothbrushes <span>(08)</span>
											</a>
										</li>
									</ul>
									<a
										href="shop-list.html"
										className="product-link text-secondary font-14 d-flex align-items-center gap-1 text-nowrap"
									>
										See all products
										<i className="icon feather icon-chevron-right font-18" />
									</a>
								</div>
							</div>
							<div className="clearfix">
								<ul id="masonry" className="row g-xl-4 g-3">
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Begs">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/12.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip0_5_3906">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-list.html">Protein supplements</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$45.00</del>
													$40.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">Sale</span>
											</div>
										</div>
									</li>
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Bottle">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/13.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip_502_3906">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-list.html">Home fitness equipment</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$45.00</del>
													$40.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">Sale</span>
												<span className="badge badge-primary">Featured</span>
											</div>
										</div>
									</li>
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Bottle">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/14.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip0_502_6">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-list.html">Yoga mats and accessories</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$49.00</del>
													$20.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">-10%</span>
											</div>
										</div>
									</li>
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Begs">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/15.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip0_5012_3906">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-list.html">Bamboo toothbrushes</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$65.00</del>
													$30.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">-50%</span>
											</div>
										</div>
									</li>
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Bottle">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/7.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip0_502_39062">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-list.html">Wooden Water Bottles</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$75.00</del>
													$30.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">-20%</span>
												<span className="badge badge-primary">Featured</span>
											</div>
										</div>
									</li>
									<li className="card-container col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 Toothbrushes">
										<div className="shop-card">
											<div className="dz-media">
												<img src="/assets/images/shop/product/16.png" alt="image" />
												<div className="shop-meta">
													<a
														href="javascript:void(0);"
														className="btn btn-secondary btn-icon"
														data-bs-toggle="modal"
														data-bs-target="#exampleModal"
													>
														<i className="fa-solid fa-eye d-md-none d-block" />
														<span className="d-md-block d-none">Quick View</span>
													</a>
													<div className="btn btn-primary meta-icon dz-wishicon">
														<svg
															className="dz-heart-fill"
															width={14}
															height={12}
															viewBox="0 0 14 12"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M13.6412 5.80113C13.0778 6.9649 12.0762 8.02624 11.1657 8.8827C10.5113 9.49731 9.19953 10.7322 7.77683 11.62C7.30164 11.9159 6.69842 11.9159 6.22323 11.62C4.80338 10.7322 3.4888 9.49731 2.83435 8.8827C1.92382 8.02624 0.92224 6.96205 0.358849 5.80113C-0.551681 3.91747 0.344622 1.44196 2.21121 0.557041C3.98674 -0.282354 5.54034 0.292418 7.00003 1.44765C8.45972 0.292418 10.0133 -0.282354 11.786 0.557041C13.6554 1.44196 14.5517 3.91747 13.6412 5.80113Z"
																fill="white"
															/>
														</svg>
														<svg
															className="dz-heart feather feather-heart"
															xmlns="http://www.w3.org/2000/svg"
															width={14}
															height={14}
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
														</svg>
													</div>
													<div className="btn btn-primary meta-icon dz-carticon">
														<svg
															className="dz-cart-check"
															width={15}
															height={15}
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M11.9144 3.73438L5.49772 10.151L2.58105 7.23438"
																stroke="white"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
														<svg
															className="dz-cart-out"
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M10.6033 10.4092C9.70413 10.4083 8.97452 11.1365 8.97363 12.0357C8.97274 12.9348 9.70097 13.6644 10.6001 13.6653C11.4993 13.6662 12.2289 12.938 12.2298 12.0388C12.2298 12.0383 12.2298 12.0378 12.2298 12.0373C12.2289 11.1391 11.5014 10.4109 10.6033 10.4092Z"
																fill="white"
															/>
															<path
																d="M13.4912 2.6132C13.4523 2.60565 13.4127 2.60182 13.373 2.60176H3.46022L3.30322 1.55144C3.20541 0.853911 2.60876 0.334931 1.90439 0.334717H0.627988C0.281154 0.334717 0 0.61587 0 0.962705C0 1.30954 0.281154 1.59069 0.627988 1.59069H1.90595C1.9858 1.59011 2.05338 1.64957 2.06295 1.72886L3.03004 8.35727C3.16263 9.19953 3.88712 9.8209 4.73975 9.82363H11.2724C12.0933 9.8247 12.8015 9.24777 12.9664 8.44362L13.9884 3.34906C14.0543 3.00854 13.8317 2.67909 13.4912 2.6132Z"
																fill="white"
															/>
															<path
																d="M6.61539 11.9676C6.57716 11.0948 5.85687 10.4077 4.98324 10.4108C4.08483 10.4471 3.38595 11.2048 3.42225 12.1032C3.45708 12.9653 4.15833 13.6505 5.02092 13.6653H5.06017C5.95846 13.626 6.65474 12.8658 6.61539 11.9676Z"
																fill="white"
															/>
															<clipPath id="clip01_502_3906">
																<rect width={14} height={14} fill="white" />
															</clipPath>
														</svg>
													</div>
												</div>
											</div>
											<div className="dz-content">
												<h5 className="title">
													<a href="shop-wishlist.html">Fitness trackers</a>
												</h5>
												<ul className="star-rating">
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#FF8A00"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
													<li>
														<svg
															width={14}
															height={14}
															viewBox="0 0 14 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M7.24805 0.734375L9.22301 5.01608L13.9054 5.57126L10.4436 8.77267L11.3625 13.3975L7.24805 11.0944L3.13355 13.3975L4.0525 8.77267L0.590651 5.57126L5.27309 5.01608L7.24805 0.734375Z"
																fill="#E4E5E8"
															/>
														</svg>
													</li>
												</ul>
												<h6 className="price">
													<del>$45.00</del>
													$40.00
												</h6>
											</div>
											<div className="product-tag">
												<span className="badge badge-secondary">Sale</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Recommend Section End*/}
			{/* Newsletter */}
			<section
				className="overlay-black-light newsletter-wrapper style-2"
				style={{
					backgroundImage: 'url("/assets/images/background/bg4.jpg")',
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container">
					<div className="subscride-inner wow fadeInUp" data-wow-delay="0.2s">
						<div className="row justify-content-center text-center">
							<div className="col-xl-12 col-lg-12">
								<div className="section-head">
									<h3 className="title">SUBSCRIBE TO OUR NEWSLETTER</h3>
									<p className="sub-title">Get latest news, offers and discounts.</p>
								</div>
								<form className="dzSubscribe" action="script/mailchamp.php" method="post">
									<div className="dzSubscribeMsg" />
									<div className="form-group">
										<div className="input-group mb-0">
											<input
												name="dzEmail"
												required="required"
												type="email"
												className="form-control"
												placeholder="Your Email Address"
											/>
											<div className="input-group-addon">
												<button name="submit" value="Submit" type="submit" className="btn">
													<svg width={21} height={21} viewBox="0 0 21 21" fill="none">
														<path
															d="M4.20972 10.7344H15.8717"
															stroke="#0D775E"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M10.0408 4.90112L15.8718 10.7345L10.0408 16.5678"
															stroke="#0D775E"
															strokeWidth={2}
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Newsletter End */}
			{/* Blog Start */}
			<section className="content-inner overlay-white-middle">
				<div className="container">
					<div className="section-head style-2 wow fadeInUp" data-wow-delay="0.1s">
						<div className="left-content">
							<h2 className="title">Blog Post</h2>
							<p>Discover the most trending post.</p>
						</div>
						<a href="post-standard.html" className="text-secondary font-14 d-flex align-items-center gap-1 text-nowrap">
							See all Post
							<i className="icon feather icon-chevron-right font-18" />
						</a>
					</div>
					<div className="swiper swiper-blog-post">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="dz-card style-2 wow fadeInUp" data-wow-delay="0.2s">
									<div className="dz-media">
										<img src="/assets/images/blog/grid/1.jpg" alt="" />
										<div className="post-date">17 May 2023</div>
									</div>
									<div className="dz-info">
										<div className="dz-meta">
											<ul>
												<li>
													<a href="javascript:void(0);">lifestyle</a>
												</li>
												<li>
													<a href="javascript:void(0);">Wooden</a>
												</li>
											</ul>
										</div>
										<h4 className="dz-title mb-0">
											<a href="blog-light-3-column.html">Uncovering the Beauty Benefits of Plant-Based Skincare</a>
										</h4>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="dz-card style-2 wow fadeInUp" data-wow-delay="0.3s">
									<div className="dz-media">
										<img src="/assets/images/blog/grid/1.jpg" alt="" />
										<div className="post-date">20 Apr 2023</div>
									</div>
									<div className="dz-info">
										<div className="dz-meta">
											<ul>
												<li>
													<a href="javascript:void(0);">lifestyle</a>
												</li>
												<li>
													<a href="javascript:void(0);">Wooden</a>
												</li>
											</ul>
										</div>
										<h4 className="dz-title mb-0">
											<a href="blog-light-3-column.html">Start Your Day With Yoga And Refreshing Air</a>
										</h4>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="dz-card style-2 wow fadeInUp" data-wow-delay="0.4s">
									<div className="dz-media">
										<img src="/assets/images/blog/grid/3.jpg" alt="" />
										<div className="post-date">15 Dec 2023</div>
									</div>
									<div className="dz-info">
										<div className="dz-meta">
											<ul>
												<li>
													<a href="javascript:void(0);">lifestyle</a>
												</li>
												<li>
													<a href="javascript:void(0);">Wooden</a>
												</li>
											</ul>
										</div>
										<h4 className="dz-title mb-0">
											<a href="blog-light-3-column.html">Explore Something New With Yoga in Your Daily LifeStyle</a>
										</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Blog End */}
			{/* Feature Box */}
			<div className="content-inner py-0 overlay-white-middle">
				<div className="container-fluid px-0">
					<div className="row gx-0">
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.1s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/1.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.2s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/2.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.3s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/3.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.4s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/4.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.5s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/5.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn" data-wow-delay="0.6s">
							<div className="insta-post dz-media dz-img-effect rotate">
								<a href="javascript:void(0);">
									<img src="/assets/images/gym/feature/6.png" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Feature Box End */}
			{/* Icon Box Start */}
			<section className="content-inner py-0">
				<div className="container-fluid px-0">
					<div className="row gx-0">
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div className="icon-bx-wraper style-2 bg-light wow fadeInUp" data-wow-delay="0.1s">
								<div className="icon-bx">
									<img src="/assets/images/svg/icon-bx/password-check.svg" alt="" />
								</div>
								<div className="icon-content">
									<h5 className="dz-title">Filter &amp; Discover</h5>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
								</div>
								<div className="data-text">01</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div className="icon-bx-wraper style-2 wow fadeInUp" data-wow-delay="0.2s">
								<div className="icon-bx">
									<img src="/assets/images/svg/icon-bx/cart.svg" alt="" />
								</div>
								<div className="icon-content">
									<h5 className="dz-title">Add to cart</h5>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
								</div>
								<div className="data-text">02</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div className="icon-bx-wraper style-2 bg-light wow fadeInUp" data-wow-delay="0.3s">
								<div className="icon-bx">
									<img src="/assets/images/svg/icon-bx/discovery.svg" alt="" />
								</div>
								<div className="icon-content">
									<h5 className="dz-title">Fast Shipping</h5>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
								</div>
								<div className="data-text">03</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-sm-6">
							<div className="icon-bx-wraper style-2 wow fadeInUp" data-wow-delay="0.4s">
								<div className="icon-bx">
									<img src="/assets/images/svg/icon-bx/box-tick.svg" alt="" />
								</div>
								<div className="icon-content">
									<h5 className="dz-title">Enjoy The Product</h5>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
								</div>
								<div className="data-text">04</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Icon Box End */}
		</div>
	);
};

export default Home;
