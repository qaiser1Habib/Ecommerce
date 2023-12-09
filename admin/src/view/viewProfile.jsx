
const viewProfile = () => {
	console.log("Banner component rendered");
	return (
		<>
			<div className="fade-in">
				<div className=" container-xxl">
					<div className="row">
						<div className="col-12 mt-5">
							<div className="card mt-5 mb-xl-10">
								<div className="card-body mt-5 pt-9 pb-0">
									<div className="d-flex flex-wrap flex-sm-nowrap">
										<div className="me-7 mb-4">
											<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
												<img
													src="/assets/adminPanel/media/avatars/300-1.jpg"
													className="w-100 rounded"
													id="view_image"
													loading="lazy"
												/>

												<button className="position-absolute bottom-0 start-100 p-1 bg-transparent border-0">
													<i className="fa-solid fa-pen-to-square"></i>
												</button>
												<input style={{ display: "none" }} type="file" accept="image/x-png,image/jpeg" />
											</div>
										</div>

										<div className="flex-grow-1">
											<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
												<div className="d-flex flex-column">
													<div className="d-flex align-items-center mb-2">
														<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
															Admin Dashboard
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
															admin
														</a>
														<a
															href="#"
															className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
														>
															<i className="ki-duotone ki-geolocation fs-4 me-1">
																<span className="path1" />
																<span className="path2" />
															</i>
															Aruba
														</a>
														<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
															<i className="ki-duotone ki-sms fs-4 me-1">
																<span className="path1" />
																<span className="path2" />
															</i>
															admin@dashboard.com
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12">
							<div className="mt-5 content flex-row-fluid" id="kt_content">
								<div className="card my-5 mb-xl-10">
									<div className="card-body pt-9 pb-0">
										<div className="card-header cursor-pointer">
											<div className="card-title m-0">
												<h3 className="fw-bold m-0">Profile information</h3>
												<div className="p-2">
													<i className="fa-solid fa-pen" />
												</div>
											</div>

											<button className="btn btn-sm btn-primary align-self-center fw-bolder">Update</button>
										</div>

										<div className="row my-7">
											<div className="col-lg-6">
												<label className=" fw-bold text-muted">First Name:</label>
												<input
													type="text"
													placeholder="First Name"
													name="firstName"
													autoComplete="on"
													data-kt-translate="sign-in-input-text"
													className="form-control form-control-solid"
												/>
											</div>

											<div className="col-lg-6">
												<label className=" fw-bold text-muted">Last Name:</label>
												<input
													type="text"
													placeholder="Last Name"
													name="lastName"
													autoComplete="on"
													data-kt-translate="sign-in-input-text"
													className="form-control form-control-solid"
												/>
											</div>
										</div>

										<div className="row mb-7">
											<div className="col-lg-6">
												<label className=" fw-bold text-muted">Email:</label>
												<input
													type="email"
													placeholder="Email"
													name="email"
													autoComplete="on"
													data-kt-translate="sign-in-input-text"
													className="form-control form-control-solid"
												/>
											</div>
										</div>

										<div className="row mb-7">
											<div className="col-lg-6">
												<label className=" fw-bold text-muted">Phone:</label>
												<input
													type="text"
													placeholder="Phone Number"
													name="phone"
													autoComplete="on"
													data-kt-translate="sign-in-input-text"
													className="form-control form-control-solid"
												/>
											</div>
											<div className="col-lg-6">
												<label className=" fw-bold text-muted">Country:</label>
												<select id="country" name="country" className="form-control form-control-solid">
													<option value="">Select a country</option>
													<option value="usa">usa</option>
												</select>
											</div>
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

export default viewProfile;
