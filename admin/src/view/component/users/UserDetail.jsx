// import { useDispatch, useSelector } from "react-redux";
// import useToast from "../store/hooks/useToast";
// import { useLoading } from "../store/hooks/useLoading";
// import { createBanner, deleteBanner, getBanners, updateBanner } from "../actions/banners";
import { Link } from "react-router-dom";
const UserDetail = () => {
	// const dispatch = useDispatch();
	// const { notify } = useToast();
	// const { isFetchingApi, setIsFetchingApi } = useLoading();
	// const hiddenImageFileInput = useRef();

	return (
		<>
			<div className="fade-in">
				<div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
					<div className="container">
						<div className="row">
							<div className="col-12 mb-2">
								<div className="card shadow-sm mb-5 mb-xxl-8">
									<div className="card-body pt-9 pb-0">
										<div className="d-flex flex-wrap flex-sm-nowrap">
											<div className="me-7 mb-4">
												<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
													<img src="assets/adminPanel/media/avatars/300-1.jpg" alt="image" />
												</div>
											</div>

											<div className="flex-grow-1">
												<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
													<div className="d-flex flex-column">
														<div className="d-flex align-items-center mb-2">
															<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
																George
															</a>
															<a href="#">
																<i className="ki-duotone ki-verify fs-1 text-primary">
																	<span className="path1" />
																	<span className="path2" />
																</i>
															</a>
														</div>

														<div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
															<a
																href="#"
																className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
															>
																<i className="ki-duotone ki-profile-circle fs-4 me-1">
																	<span className="path1" />
																	<span className="path2" />
																	<span className="path3" />
																</i>
																Developer
															</a>
															<a
																href="#"
																className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
															>
																<i className="ki-duotone ki-geolocation fs-4 me-1">
																	<span className="path1" />
																	<span className="path2" />
																</i>
																SF, Bay Area
															</a>
															<a
																href="#"
																className="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
															>
																<i className="ki-duotone ki-sms fs-4 me-1">
																	<span className="path1" />
																	<span className="path2" />
																</i>
																max@kt.com
															</a>
														</div>
													</div>
												</div>

												<div className="d-flex flex-wrap flex-stack">
													<div className="d-flex flex-column flex-grow-1 pe-8">
														<div className="d-flex flex-wrap">
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<div className="d-flex align-items-center">
																	<div className="fs-2 fw-bold counted">$4,500</div>
																</div>

																<div className="fw-semibold fs-6 text-gray-400">Total Sales</div>
															</div>

															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<div className="d-flex align-items-center">
																	<div className="fs-2 fw-bold counted">$80</div>
																</div>

																<div className="fw-semibold fs-6 text-gray-400">Total Commission</div>
															</div>

															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																<div className="d-flex align-items-center">
																	<i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
																		<span className="path1" />
																		<span className="path2" />
																	</i>
																	<div
																		className="fs-2 fw-bold counted"
																		data-kt-countup="true"
																		data-kt-countup-value={60}
																		data-kt-countup-prefix="%"
																		data-kt-initialized={1}
																	>
																		%60
																	</div>
																</div>

																<div className="fw-semibold fs-6 text-gray-400">Success Rate</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className=" col-md-6 col-xl-4 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/1.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
									</div>

									<div className="card-body p-1 px-4 card-scroll">
										<div className="banner banner-light fs-2 mb-4 d-flex  justify-content-between ">
											<div className="fs-3 fw-bold text-dark">
												<Link to="/content" className="text-dark">
													Hard Disk Drives (HDDs)
												</Link>
											</div>
										</div>

										<div className="fs-6 fw-bold text-gray-600 mb-5">
											<p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
												been the industry's standard dummy text ever since the 1500s,
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className=" col-md-6 col-xl-4 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/2.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
									</div>

									<div className="card-body p-1 px-4 card-scroll">
										<div className="banner banner-light fs-2 mb-4 d-flex  justify-content-between ">
											<div className="fs-3 fw-bold text-dark">
												{" "}
												<Link to="/content" className="text-dark">
													Hard Disk Drives (HDDs)
												</Link>
											</div>
										</div>

										<div className="fs-6 fw-bold text-gray-600 mb-5">
											<p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
												been the industry's standard dummy text ever since the 1500s,
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className=" col-md-6 col-xl-4 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/3.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
									</div>

									<div className="card-body p-1 px-4 card-scroll">
										<div className="banner banner-light fs-2 mb-4 d-flex  justify-content-between ">
											<div className="fs-3 fw-bold text-dark">
												<Link to="/content" className="text-dark">
													Hard Disk Drives (HDDs)
												</Link>
											</div>
										</div>

										<div className="fs-6 fw-bold text-gray-600 mb-5">
											<p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">
												Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
												been the industry's standard dummy text ever since the 1500s,
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default UserDetail;
