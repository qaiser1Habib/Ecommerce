import { Link } from "react-router-dom";

const BreadCrumb = ({
	pageNames = [],
	profileEditBtns = false,
	chagnePasswordEditBtns = false,
	editProfileBtns = false,
	icon = "fa-eye",
	path = "view-profile",
	viewOrEditProfile = "View Profile",
}) => {
	return (
		<div className="container-fluid px-0">
			<div className="toolbar py-5 py-lg-5" id="kt_toolbar">
				<div className="container-xxl">
					<div className="row">
						<div className="col-md-6">
							<div className="page-title d-flex flex-column me-3">
								<h1 className="d-flex text-dark text-capitalize fw-bold m-0 fs-3">{pageNames[pageNames.length - 1]}</h1>

								<ul className="mt-1 breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-6">
									<li className="breadcrumb-item text-gray-600">
										<Link to="/" className="text-gray-600 text-hover-primary">
											Home
										</Link>
									</li>

									<li
										className={`breadcrumb-item ${
											pageNames[pageNames.length - 1] === "dashboard" ? "text-primary fw-bolder" : "text-gray-600"
										}`}
									>
										<Link to="/" className="text-gray-600 text-hover-primary">
											Dashboard
										</Link>
									</li>
									{pageNames[pageNames.length - 1] !== "dashboard" &&
										pageNames.map((pageName, index) => (
											<li
												key={index}
												className={`breadcrumb-item ${
													index == pageNames.length - 1 ? "text-gray-900" : "text-gray-600"
												}`}
											>
												{index !== pageNames.length - 1 ? (
													<Link
														to={`/${pageNames.slice(0, index + 2).join("/")}`}
														className="text-gray-600 text-hover-primary text-capitalize"
													>
														{pageName}
													</Link>
												) : (
													<span className="text-capitalize fw-bolder text-primary">{pageName}</span>
												)}
											</li>
										))}
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="d-flex justify-content-md-end align-items-center py-2 py-md-1">
								{profileEditBtns && (
									<div className="me-3">
										<Link to={`/admin-panel/${path}`} className="btn btn-light-primary fw-bolder">
											<i className={`me-2 fw-bolder fa ${icon}`} />
											{viewOrEditProfile}
										</Link>
									</div>
								)}
								{chagnePasswordEditBtns && (
									<div className="d-flex align-items-center py-2 py-md-1">
										<Link
											to="/admin-panel/change-password"
											className="btn btn-light-success fw-bolder"
											id="kt_toolbar_primary_button"
										>
											<i className="me-2 fw-bolder fa fa-lock" />
											Change Password
										</Link>
									</div>
								)}
								{editProfileBtns && (
									<div className="d-flex align-items-center py-2 py-md-1">
										<Link
											to="/admin-panel/edit-profile"
											className="btn btn-light-success fw-bolder"
											id="kt_toolbar_primary_button"
										>
											<i className="me-2 fw-bolder fa fa-edit" />
											Edit Profile
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
