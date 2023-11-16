import { useEffect } from "react";
const Dashboard = ({ funcShow }) => {
	useEffect(() => {
		funcShow(true);
	}, []);

	return (
		<div className="fade-in">
			<div className="container my-20">
				<div className="row mt-1 g-5 g-xl-10 rounded-3 shadow-sm">
					<div className="col-xl-12 mb-5 mb-xl-10">
						<div className="card   card-flush h-xl-100">
							<div
								className="card-header justify-content-center rounded bgi-no-repeat bgi-size-cover bgi-position-y-bottom bgi-position-x-center align-items-start h-250px"
								style={{
									background: "linear-gradient(90deg, #E38853 0%, #d77b45 100%)",
								}}
							>
								<h3 className="card-title align-items-start flex-column text-white pt-8 mb-6 text-center ">
									<span className="d-block fs-2x fw-bolder mb-3 w-100">Welcome </span>
									<div className="d-block fs-2x text-white mb-3 w-100">We're excited to have you on board.</div>
								</h3>
							</div>

							<div className="card-body mt-n10">
								<div className="mt-n20 position-relative">
									<div className="row g-3 g-lg-6 justify-content-center">
										<div className="col-md-3">
											<div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 ">
												<div className="d-flex justify-content-between">
													<div className="symbol symbol-30px me-5 mb-8">
														<span className="symbol-label">
															<span className="fs-2qx fa fa-list  text-primary"></span>
														</span>
													</div>

													<div className="symbol   me-5 mb-8">
														<span className="text-dark fw-bold d-block fs-2qx lh-1 mb-1">1</span>
													</div>
												</div>

												<div className=" mt-10">
													<span className="text-gray-700 fw-bold fs-2">Discover Doard</span>
												</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 ">
												<div className="d-flex justify-content-between">
													<div className="symbol symbol-30px me-5 mb-8">
														<span className="symbol-label">
															<span className="fs-2qx fa fa-window-restore  text-primary"></span>
														</span>
													</div>

													<div className="symbol   me-5 mb-8">
														<span className="text-dark fw-bold d-block fs-2qx lh-1 mb-1">1</span>
													</div>
												</div>

												<div className=" mt-10">
													<span className="text-gray-700 fw-bold fs-2">Banners</span>
												</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 ">
												<div className="d-flex justify-content-between">
													<div className="symbol symbol-30px me-5 mb-8">
														<span className="symbol-label">
															<span className="fs-2qx fas fa-dollar text-primary"></span>
														</span>
													</div>

													<div className="symbol   me-5 mb-8">
														<span className="text-dark fw-bold d-block fs-2qx lh-1 mb-1">1</span>
													</div>
												</div>

												<div className=" mt-10">
													<span className="text-gray-700 fw-bold fs-2">Pricing</span>
												</div>
											</div>
										</div>
										<div className="col-md-3">
											<div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 ">
												<div className="d-flex justify-content-between">
													<div className="symbol symbol-30px me-5 mb-8">
														<span className="symbol-label">
															<span className="fs-2qx fa fa-user text-primary"></span>
														</span>
													</div>

													<div className="symbol   me-5 mb-8">
														<span className="text-dark fw-bold d-block fs-2qx lh-1 mb-1">6</span>
													</div>
												</div>

												<div className=" mt-10">
													<span className="text-gray-700 fw-bold fs-2">Users</span>
												</div>
											</div>
										</div>
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

export default Dashboard;
