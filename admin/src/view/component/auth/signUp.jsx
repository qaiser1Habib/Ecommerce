import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignUp = ({ funcShow }) => {
	const [spinner, SetSpinner] = useState("off");

	const handleSubmit = (e) => {
		e.preventDefault();

		SetSpinner("on");

		setTimeout(() => {
			SetSpinner("off");
			Navigate("/");
		}, 1000);
	};

	useEffect(() => {
		funcShow(false);
	}, []);
	const currentYear = new Date().getFullYear();

	return (
		<div className="d-flex flex-column flex-root" id="kt_app_root">
			<div className="d-flex flex-column flex-lg-row flex-column-fluid">
				<a className="d-block d-lg-none  mx-auto py-20">
					<img alt="Logo" src="/assets/basketball/logo.jpeg" className="theme-light-show h-75px" />
				</a>

				<div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
					<div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
						<div className="d-flex flex-stack py-2">
							<div className="me-2">
								<Link to="/login" className="btn btn-icon bg-light rounded-circle">
									<i className="ki-duotone ki-black-left fs-2 text-gray-800" />
								</Link>
							</div>
							<div className="m-0">
								<span className="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="sign-up-head-desc">
									Already a member ?
								</span>
								<Link to="/login" className="link-primary fw-bold fs-5" data-kt-translate="sign-up-head-link">
									Sign In
								</Link>
							</div>
						</div>

						<div className="py-20">
							<form className="form w-100" noValidate="novalidate" id="kt_sign_up_form" onSubmit={handleSubmit}>
								<div className="text-start mb-10">
									<h1 className="text-dark mb-3 fs-3x" data-kt-translate="sign-up-title">
										Create an Account
									</h1>

									<div className="text-gray-400 fw-semibold fs-6" data-kt-translate="general-desc">
										Get unlimited access &amp; earn money
									</div>
								</div>

								<div className="row fv-row mb-7">
									<div className="col-xl-6 mb-5">
										<input
											className="form-control form-control-lg form-control-solid"
											type="text"
											placeholder="First Name"
											name="first-name"
											autoComplete="off"
											data-kt-translate="sign-up-input-first-name"
										/>
									</div>

									<div className="col-xl-6">
										<input
											className="form-control form-control-lg form-control-solid"
											type="text"
											placeholder="Last Name"
											name="last-name"
											autoComplete="off"
											data-kt-translate="sign-up-input-last-name"
										/>
									</div>
								</div>

								<div className="fv-row mb-10">
									<input
										className="form-control form-control-lg form-control-solid"
										type="email"
										placeholder="Email"
										name="email"
										autoComplete="off"
										data-kt-translate="sign-up-input-email"
									/>
								</div>

								<div className="fv-row mb-10" data-kt-password-meter="true">
									<div className="mb-1">
										<div className="position-relative mb-3">
											<input
												className="form-control form-control-lg form-control-solid"
												type="password"
												placeholder="Password"
												name="password"
												autoComplete="off"
												data-kt-translate="sign-up-input-password"
											/>
											<span
												className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
												data-kt-password-meter-control="visibility"
											>
												<i className="ki-duotone ki-eye-slash fs-2" />
												<i className="ki-duotone ki-eye fs-2 d-none" />
											</span>
										</div>
									</div>
								</div>

								<div className="fv-row mb-10">
									<input
										className="form-control form-control-lg form-control-solid"
										type="password"
										placeholder="Confirm Password"
										name="confirm-password"
										autoComplete="off"
										data-kt-translate="sign-up-input-confirm-password"
									/>
								</div>

								<div className="d-flex flex-stack">
									<button
										id="kt_sign_up_submit"
										className="btn btn-success"
										data-kt-translate="sign-up-submit"
										disabled={spinner === "on"}
										data-kt-indicator={spinner}
									>
										<span className="indicator-label">Submit</span>

										<span className="indicator-progress">
											Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2" />
										</span>
									</button>
								</div>
							</form>
						</div>

						<div className="m-0">
							<p className="footer__text">
								Copyright <i className="fa fa-copyright"></i> {currentYear}{" "}
								<a href="https://single-solution.com/" style={{ textDecoration: "underline" }}>
									Single Solution
								</a>
								. All rights reserved.
							</p>
						</div>
					</div>
				</div>
				<div
					className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat align-items-center justify-content-center"
					style={{ background: "#E38853" }}
				>
					<div className="w-100 text-center d-flex align-items-center justify-content-center flex-column p-5 m-5">
						<img className="img-fluid mt-5 rounded" src="/assets/basketball/banner.jpeg" alt="logo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
