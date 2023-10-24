
const ProductList = () => {
	return (
		<div className="page-content">
			{/*banner*/}
			<div className="dz-bnr-inr style-1" style={{ backgroundImage: "url(assets/images/background/bg-shape.jpg)" }}>
				<div className="container">
					<div className="dz-bnr-inr-entry">
						<h1>Shop Standard</h1>
						<nav aria-label="breadcrumb" className="breadcrumb-row">
							<ul className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.html"> Home</a>
								</li>
								<li className="breadcrumb-item">Shop Standard</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<section className="content-inner-1 pt-3 z-index-unset">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-xl-3">
							<div className="sticky-xl-top">
								<a className="panel-close-btn">
									<svg width={35} height={35} viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M37.748 12.5L12.748 37.5"
											stroke="white"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M12.748 12.5L37.748 37.5"
											stroke="white"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								<div className="shop-filter mt-xl-2 mt-0">
									<aside>
										<div className="d-flex align-items-center justify-content-between m-b30">
											<h6 className="title mb-0 fw-normal">
												<svg
													className="me-2"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 25 25"
													width={20}
													height={20}
												>
													<g id="Layer_29" data-name="Layer 29">
														<path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
														<path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z" />
														<path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
													</g>
												</svg>
												Filter
											</h6>
										</div>
										<div className="widget widget_search">
											<div className="form-group">
												<div className="input-group">
													<input
														name="dzSearch"
														required="required"
														type="search"
														className="form-control"
														placeholder="Search Product"
													/>
													<div className="input-group-addon">
														<button name="submit" value="Submit" type="submit" className="btn">
															<svg
																width={20}
																height={20}
																viewBox="0 0 20 20"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
																	stroke="#0D775E"
																	strokeWidth={2}
																	strokeLinecap="round"
																	strokeLinejoin="round"
																/>
																<path
																	d="M17.5 17.5L13.875 13.875"
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
										</div>
										<div className="widget">
											<h6 className="widget-title">Price</h6>
											<div className="price-slide range-slider">
												<div className="price">
													<div className="range-slider style-1">
														<div id="slider-tooltips" className="mb-3" />
														<span className="example-val" id="slider-margin-value-min" />
														<span className="example-val" id="slider-margin-value-max" />
													</div>
												</div>
											</div>
										</div>
										<div className="widget">
											<h6 className="widget-title">Color</h6>
											<div className="d-flex align-items-center flex-wrap color-filter ps-2">
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel1"
														defaultValue="#24262B"
														aria-label="..."
														defaultChecked=""
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel2"
														defaultValue="#8CB2D1"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel3"
														defaultValue="#0D775E"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel4"
														defaultValue="#D7D7D7"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel5"
														defaultValue="#D1998C"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel6"
														defaultValue="#84BBAE"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel7"
														defaultValue="#9072AD"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel8"
														defaultValue="#C895A1"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabel9"
														defaultValue="#8FA4EF"
														aria-label="..."
													/>
													<span />
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="radioNoLabel"
														id="radioNoLabe20"
														defaultValue="#ADCFA7"
														aria-label="..."
													/>
													<span />
												</div>
											</div>
										</div>
										<div className="widget">
											<h6 className="widget-title">Size</h6>
											<div className="btn-group product-size">
												<input
													type="radio"
													className="btn-check"
													name="btnradio1"
													id="btnradio11"
													defaultChecked=""
												/>
												<label className="btn" htmlFor="btnradio11">
													4
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio21" />
												<label className="btn" htmlFor="btnradio21">
													6
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio31" />
												<label className="btn" htmlFor="btnradio31">
													8
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio41" />
												<label className="btn" htmlFor="btnradio41">
													10
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio51" />
												<label className="btn" htmlFor="btnradio51">
													12
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio61" />
												<label className="btn" htmlFor="btnradio61">
													14
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio71" />
												<label className="btn" htmlFor="btnradio71">
													16
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio81" />
												<label className="btn" htmlFor="btnradio81">
													18
												</label>
												<input type="radio" className="btn-check" name="btnradio1" id="btnradio91" />
												<label className="btn" htmlFor="btnradio91">
													20
												</label>
											</div>
										</div>
										<div className="widget widget_categories">
											<h6 className="widget-title">Category</h6>
											<ul>
												<li className="cat-item cat-item-26">
													<a>Yoga Mats</a> (15)
												</li>
												<li className="cat-item cat-item-36">
													<a>Yoga Accessories</a> (22)
												</li>
												<li className="cat-item cat-item-43">
													<a>Reusable Bags</a> (10)
												</li>
												<li className="cat-item cat-item-27">
													<a>Water Bottles</a> (3)
												</li>
												<li className="cat-item cat-item-40">
													<a>Bamboo Toothbrushes</a> (8)
												</li>
												<li className="cat-item cat-item-40">
													<a>Fitness Trackers</a> (2)
												</li>
												<li className="cat-item cat-item-40">
													<a>Home Fitness Equipment</a> (7)
												</li>
											</ul>
										</div>
										<div className="widget widget_tag_cloud">
											<h6 className="widget-title">Tags</h6>
											<div className="tagcloud">
												<a>Mats </a>
												<a>Accessories</a>
												<a>Bottles</a>
												<a>Bottles</a>
												<a>Trackers</a>
												<a>Bags</a>
												<a>Cup</a>
												<a>Toothbrushes</a>
											</div>
										</div>
										<a className="btn btn-sm font-14 btn-primary btn-sharp">RESET</a>
									</aside>
								</div>
							</div>
						</div>
						<div className="col-12 col-xl-9">
							<div className="filter-wrapper">
								<div className="filter-left-area">
									<ul className="filter-tag">
										<li>
											<a className="tag-btn">
												Bottle
												<i className="icon feather icon-x tag-close" />
											</a>
										</li>
										<li>
											<a className="tag-btn">
												Wooden CUP
												<i className="icon feather icon-x tag-close" />
											</a>
										</li>
										<li>
											<a className="tag-btn">
												Begs
												<i className="icon feather icon-x tag-close" />
											</a>
										</li>
									</ul>
									<span>Showing 1–5 Of 50 Results</span>
								</div>
								<div className="filter-right-area">
									<a className="panel-btn me-2">
										<svg className="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width={20} height={20}>
											<g id="Layer_28" data-name="Layer 28">
												<path d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
												<path d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z" />
												<path d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z" />
											</g>
										</svg>
										Filter
									</a>
									<div className="form-group">
										<select className="default-select">
											<option>Default sorting</option>
											<option>1 Day</option>
											<option>1 Week</option>
											<option>3 Weeks</option>
											<option>1 Month</option>
											<option>3 Months</option>
										</select>
									</div>
									<div className="form-group Category">
										<select className="default-select">
											<option>Categories</option>
											<option>1 Day</option>
											<option>1 Week</option>
											<option>3 Weeks</option>
											<option>1 Month</option>
											<option>3 Months</option>
										</select>
									</div>
									<div className="shop-tab">
										<ul className="nav" role="tablist" id="dz-shop-tab">
											<li className="nav-item" role="presentation">
												<a
													href="#tab-list-list"
													className="nav-link active"
													id="tab-list-list-btn"
													data-bs-toggle="pill"
													data-bs-target="#tab-list-list"
													role="tab"
													aria-controls="tab-list-list"
													aria-selected="true"
												>
													<i className="flaticon flaticon-list" />
												</a>
											</li>
											<li className="nav-item" role="presentation">
												<a
													href="#tab-list-column"
													className="nav-link"
													id="tab-list-column-btn"
													data-bs-toggle="pill"
													data-bs-target="#tab-list-column"
													role="tab"
													aria-controls="tab-list-column"
													aria-selected="false"
												>
													<i className="flaticon flaticon-blocks" />
												</a>
											</li>
											<li className="nav-item" role="presentation">
												<a
													href="#tab-list-grid"
													className="nav-link"
													id="tab-list-grid-btn"
													data-bs-toggle="pill"
													data-bs-target="#tab-list-grid"
													role="tab"
													aria-controls="tab-list-grid"
													aria-selected="false"
												>
													<i className="flaticon flaticon-menu" />
												</a>
											</li>
											<li className="nav-item" role="presentation">
												<a
													href="#tab-list-collage"
													className="nav-link"
													id="tab-list-collage-btn"
													data-bs-toggle="pill"
													data-bs-target="#tab-list-collage"
													role="tab"
													aria-controls="tab-list-collage"
													aria-selected="false"
												>
													<i className="flaticon flaticon-sections" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 tab-content shop-" id="pills-tabContent">
									<div className="tab-pane fade " id="tab-list-list" role="tabpanel" aria-labelledby="tab-list-list-btn">
										<div className="row">
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Water Bottles</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 250 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$30.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck1" />
																		<label className="form-check-label" htmlFor="favoriteCheck1">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Glass</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 650 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$94.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck2" />
																		<label className="form-check-label" htmlFor="favoriteCheck2">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/3.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Toothbrushes</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 458 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$35.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck3" />
																		<label className="form-check-label" htmlFor="favoriteCheck3">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/4.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Paper Bags</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 630 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$25.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck4" />
																		<label className="form-check-label" htmlFor="favoriteCheck4">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Water Bottles</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 520 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$45.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck5" />
																		<label className="form-check-label" htmlFor="favoriteCheck5">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Glass</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 256 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$70.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck6" />
																		<label className="form-check-label" htmlFor="favoriteCheck6">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/3.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Wooden Toothbrushes</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 776 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$75.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck7" />
																		<label className="form-check-label" htmlFor="favoriteCheck7">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-12 col-sm-12 col-xxxl-6">
												<div className="dz-shop-card style-2">
													<div className="dz-media">
														<img src="/assets/images/shop/product/4.png" alt="image" />
														<div className="product-tag">
															<span className="badge badge-secondary">Sale</span>
														</div>
													</div>
													<div className="dz-content">
														<div className="dz-header">
															<div>
																<h4 className="title mb-0">
																	<a href="shop-list.html">Paper Bags</a>
																</h4>
																<ul className="dz-tags">
																	<li>
																		<a href="shop-with-category.html">Accessories,</a>
																	</li>
																	<li>
																		<a href="shop-with-category.html">Clocks</a>
																	</li>
																</ul>
															</div>
															<div className="review-num">
																<ul className="dz-rating">
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#24262B"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																	<li>
																		<svg
																			width={14}
																			height={13}
																			viewBox="0 0 14 13"
																			fill="none"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<path
																				opacity="0.2"
																				d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
																				fill="#5E626F"
																			/>
																		</svg>
																	</li>
																</ul>
																<span>
																	<a> 255 Review</a>
																</span>
															</div>
														</div>
														<div className="dz-body">
															<div className="dz-rating-box">
																<div>
																	<p className="dz-para">
																		It is a long established fact that a reader will be distracted by the
																		readable content of a page when looking at its layout. The point of using
																		Lorem Ipsum is that it has.
																	</p>
																</div>
															</div>
															<div className="rate">
																<div className="d-flex align-items-center mb-xl-3 mb-2">
																	<div className="meta-content">
																		<span className="price-name">Price</span>
																		<span className="price-num">$36.00</span>
																	</div>
																</div>
																<div className="d-flex">
																	<a href="shop-cart.html" className="btn btn-secondary btn-md btn-icon">
																		<i className="icon feather icon-shopping-cart d-md-none d-block" />
																		<span className="d-md-block d-none">Add to cart</span>
																	</a>
																	<div className="bookmark-btn style-1">
																		<input className="form-check-input" type="checkbox" id="favoriteCheck8" />
																		<label className="form-check-label" htmlFor="favoriteCheck8">
																			<svg
																				width={23}
																				height={23}
																				viewBox="0 0 21 21"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M2.64094 9.89964C1.74678 7.10798 2.79178 3.91714 5.72261 2.97298C7.26428 2.47548 8.96594 2.76881 10.2476 3.73298C11.4601 2.79548 13.2243 2.47881 14.7643 2.97298C17.6951 3.91714 18.7468 7.10798 17.8534 9.89964C16.4618 14.3246 10.2476 17.733 10.2476 17.733C10.2476 17.733 4.07928 14.3763 2.64094 9.89964Z"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																				<path
																					d="M13.5811 5.81787C14.4727 6.1062 15.1027 6.90204 15.1786 7.8362"
																					stroke="#5E626F"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="tab-list-column"
										role="tabpanel"
										aria-labelledby="tab-list-column-btn"
									>
										<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
															<del>$95.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="shop-meta">
															<a
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
															<a href="shop-list.html">Wooden Cup</a>
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
														<span className="badge badge-secondary">-5%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/6.png" alt="image" />
														<div className="shop-meta">
															<a
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
															<a href="shop-list.html">Eco friendly bags</a>
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
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-10%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/7.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_906">
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
															$50.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/8.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_50_3906">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Wooden Cup</a>
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
															$5.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-15%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_52_3906">
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
															<del>$85.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_02_3906">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Wooden Cup</a>
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
															$30.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-10%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/3.png" alt="image" />
														<div className="shop-meta">
															<a
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
															<del>$45.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-31%</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/4.png" alt="image" />
														<div className="shop-meta">
															<a
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
															<a href="shop-list.html">Eco friendly bags</a>
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
															$5.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-25%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade active show"
										id="tab-list-grid"
										role="tabpanel"
										aria-labelledby="tab-list-grid-btn"
									>
										<div className="row gx-xl-4 g-3">
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_2_3906">
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
															<del>$85.00</del>
															$35.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip_50_3906">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Wooden Cup</a>
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
														<span className="badge badge-secondary">-20%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/3.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_2">
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
															<del>$35.00</del>
															$20.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-20%</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/4.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_39061">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Eco friendly bags</a>
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
															<del>$98.00</del>
															$36.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-12%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/5.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_3">
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
															<del>$40.00</del>
															$20.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-10%</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/6.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_3936">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Eco friendly bags</a>
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
														<span className="badge badge-secondary">-5%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/7.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_2_06">
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
															<del>$56.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/8.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_12_222">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Wooden Cup</a>
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
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-30%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_52_323">
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
															<del>$85.00</del>
															$25.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/2.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_522_3906">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Wooden Cup</a>
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
														<span className="badge badge-secondary">-10%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/3.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_30">
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
															<del>$45.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-31%</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/product/4.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_50_36">
																		<rect width={14} height={14} fill="white" />
																	</clipPath>
																</svg>
															</div>
														</div>
													</div>
													<div className="dz-content">
														<h5 className="title">
															<a href="shop-list.html">Eco friendly bags</a>
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
															<del>$26.00</del>
															$20.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">-6%</span>
														<span className="badge badge-primary">Featured</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="tab-list-collage"
										role="tabpanel"
										aria-labelledby="tab-list-collage-btn"
									>
										<div className="row">
											<div className="col-lg-6">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/large/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip0_502_123">
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
															<del>$45.00</del>
															$40.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="row">
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/2.png" alt="image" />
																<div className="shop-meta">
																	<a className="btn btn-secondary btn-icon">
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
																	<a href="shop-list.html">Wooden Cup</a>
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
																	<del>$95.00</del>
																	$40.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-25%</span>
																<span className="badge badge-primary">Featured</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/3.png" alt="image" />
																<div className="shop-meta">
																	<a className="btn btn-secondary btn-icon">
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
																	<del>$35.00</del>
																	$20.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-10%</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/4.png" alt="image" />
																<div className="shop-meta">
																	<a className="btn btn-secondary btn-icon">
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
																	<a href="shop-list.html">Eco friendly bags</a>
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
																	<del>$56.00</del>
																	$30.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-25%</span>
																<span className="badge badge-primary">Featured</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/5.png" alt="image" />
																<div className="shop-meta">
																	<a className="btn btn-secondary btn-icon">
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
																	<del>$85.00</del>
																	$35.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-65%</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-6">
												<div className="row">
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/2.png" alt="image" />
																<div className="shop-meta">
																	<a
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
																	<a href="shop-list.html">Wooden Cup</a>
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
																	<del>$56.00</del>
																	$30.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-25%</span>
																<span className="badge badge-primary">Featured</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/3.png" alt="image" />
																<div className="shop-meta">
																	<a
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
																<span className="badge badge-secondary">-15%</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/4.png" alt="image" />
																<div className="shop-meta">
																	<a
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
																	<a href="shop-list.html">Eco friendly bags</a>
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
																	$40.00
																</h6>
															</div>
															<div className="product-tag">
																<span className="badge badge-secondary">-40%</span>
																<span className="badge badge-primary">Featured</span>
															</div>
														</div>
													</div>
													<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-b30">
														<div className="shop-card">
															<div className="dz-media">
																<img src="/assets/images/shop/product/5.png" alt="image" />
																<div className="shop-meta">
																	<a
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
																<span className="badge badge-secondary">-15%</span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="shop-card">
													<div className="dz-media">
														<img src="/assets/images/shop/large/1.png" alt="image" />
														<div className="shop-meta">
															<a
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
																	<clipPath id="clip10_5_3">
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
															<del>$63.00</del>
															$23.00
														</h6>
													</div>
													<div className="product-tag">
														<span className="badge badge-secondary">Sale</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row page mt-0">
								<div className="col-md-6">
									<p className="page-text">Showing 1–5 Of 50 Results</p>
								</div>
								<div className="col-md-6">
									<nav aria-label="Blog Pagination">
										<ul className="pagination style-1">
											<li className="page-item">
												<a className="page-link prev">Prev</a>
											</li>
											<li className="page-item">
												<a className="page-link active">1</a>
											</li>
											<li className="page-item">
												<a className="page-link">2</a>
											</li>
											<li className="page-item">
												<a className="page-link">3</a>
											</li>
											<li className="page-item">
												<a className="page-link next">Next</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductList;
