import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

const newPassword = ({ funcShow }) => {
	const [spinner, SetSpinner] = useState("off");

	const navigate = useNavigate();
	const [userInput, setUserInput] = useState({
		password: "",
		confirmPassword: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserInput({
			...userInput,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		SetSpinner("on");

		setTimeout(() => {
			SetSpinner("off");
			navigate("/admin-panel/login");
		}, 1000);
	};

	const currentYear = new Date().getFullYear();

	return (
		<Fragment>
			<div className="d-flex flex-column flex-lg-row flex-column-fluid app-default">
				<a className="d-block d-lg-none  mx-auto py-20">
					<img alt="Logo" src="/favicon.png" className="theme-light-show h-75px" />
				</a>
				{/*end::Logo*/}
				{/*begin::Aside*/}
				<div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
					{/*begin::Wrapper*/}
					<div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
						{/*begin::Header*/}
						<div className="d-flex flex-stack py-2">
							{/*begin::Back link*/}
							<div className="me-2">
								<Link to="/admin-panel/forgot-password" className="btn btn-icon bg-light rounded-circle">
									<i className="ki-duotone ki-black-left fs-2 text-gray-800" />
								</Link>
							</div>
							{/*end::Back link*/}
							{/*begin::Sign Up link*/}
							<div className="m-0">
								<span className="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="new-password-head-desc">
									Already a member ?
								</span>
								<Link
									to="/admin-panel/login"
									className="link-primary fw-bold fs-5"
									data-kt-translate="new-password-head-link"
								>
									Log In
								</Link>
							</div>
							{/*end::Sign Up link=*/}
						</div>
						{/*end::Header*/}
						{/*begin::Body*/}
						<div className="py-20">
							{/*begin::Form*/}
							<form noValidate="novalidate" className="form w-100" onSubmit={handleSubmit}>
								{/*begin::Heading*/}
								<div className="text-start mb-10">
									{/*begin::Title*/}
									<h1 className="text-dark mb-3 fs-3x" data-kt-translate="new-password-title">
										Setup New Password
									</h1>
									{/*end::Title*/}
									{/*begin::Text*/}
									<div className="text-gray-400 fw-semibold fs-6" data-kt-translate="new-password-desc">
										Have you already reset the password ?
									</div>
									{/*end::Link*/}
								</div>
								{/*end::Heading*/}
								{/*begin::Input group*/}
								<div className="mb-10 fv-row" data-kt-password-meter="true">
									{/*begin::Wrapper*/}
									<div className="mb-1">
										{/*begin::Input wrapper*/}
										<div className="position-relative mb-3">
											<input
												className="form-control form-control-lg form-control-solid"
												type="password"
												placeholder="Password"
												name="password"
												autoComplete="off"
												value={userInput.password}
												onChange={handleInput}
												data-kt-translate="new-password-input-password"
											/>
											<span
												className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
												data-kt-password-meter-control="visibility"
											>
												<i className="ki-duotone ki-eye-slash fs-2" />
												<i className="ki-duotone ki-eye fs-2 d-none" />
											</span>
										</div>
										{/*end::Input wrapper*/}
										{/*begin::Meter*/}
										<div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2" />
											<div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px" />
										</div>
										{/*end::Meter*/}
									</div>
									{/*end::Wrapper*/}
									{/*begin::Hint*/}
									<div className="text-muted" data-kt-translate="new-password-hint">
										Use 8 or more characters with a mix of letters, numbers &amp; symbols.
									</div>
									{/*end::Hint*/}
								</div>
								{/*end::Input group=*/}
								{/*begin::Input group=*/}
								<div className="fv-row mb-10">
									<input
										className="form-control form-control-lg form-control-solid"
										type="password"
										placeholder="Confirm Password"
										name="confirm-password"
										value={userInput.confirmPassword}
										onChange={handleInput}
										autoComplete="off"
										data-kt-translate="new-password-confirm-password"
									/>
								</div>
								{/*end::Input group=*/}
								{/*begin::Actions*/}
								<div className="d-flex flex-stack">
									{/*begin::Link*/}
									<button
										id="kt_new_password_submit"
										className="btn btn-primary"
										data-kt-translate="new-password-submit"
										disabled={spinner === "on"}
										data-kt-indicator={spinner}
									>
										{/*begin::Indicator label*/}
										<span className="indicator-label">Submit</span>
										{/*end::Indicator label*/}
										{/*begin::Indicator progress*/}
										<span className="indicator-progress">
											Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2" />
										</span>
										{/*end::Indicator progress*/}
									</button>
								</div>
								{/*end::Actions*/}
							</form>
							{/*end::Form*/}
						</div>
						{/*end::Body*/}
						{/*begin::Footer*/}
						<div className="m-0">
							<p className="footer__text">
								Copyright <i className="fa fa-copyright"></i> {currentYear}{" "}
								<a href="https://single-solution.com/" style={{ textDecoration: "underline" }}>
									Single Solution
								</a>
								. All rights reserved.
							</p>
							{/*end::Menu*/}
						</div>
						{/*end::Footer*/}
					</div>
					{/*end::Wrapper*/}
				</div>
				{/*end::Aside*/}
				{/*begin::Body*/}
				<div
					className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat align-items-center justify-content-center"
					style={{
						backgroundImage: "url(/assets/adminPanel/media/auth/phoenix-bg.png)",
					}}
				>
					<div className="w-25 h-50" style={{ marginBottom: "325px", marginRight: "150px" }}>
						<img className="img-fluid mt-5" src="/assets/adminPanel/media/header/nav-logo.png" alt="logo" />
					</div>
				</div>
				{/*begin::Body*/}
			</div>
		</Fragment>
	);
};

export default newPassword;
