import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = ({ funcShow }) => {
	const [spinner, SetSpinner] = useState("off");

	const navigate = useNavigate();
	const [userInput, setUserInput] = useState({
		email: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUserInput({
			...email,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		SetSpinner("on");

		setTimeout(() => {
			SetSpinner("off");
			navigate("/admin-panel/new-password");
		}, 1000);
	};

	useEffect(() => {
		funcShow(false);
	}, []);

	const currentYear = new Date().getFullYear();
	return (
		<div className="d-flex flex-column flex-lg-row flex-column-fluid app-default">
			<a className="d-block d-lg-none  mx-auto py-20">
				<img alt="Logo" src="/assets/basketball/logo.jpeg" className="theme-light-show h-75px" />
			</a>
	
			<div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
				<div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
					<div className="d-flex flex-stack py-2">
						<div className="me-2">
							<Link to="/login" className="btn btn-icon bg-light rounded-circle">
								<i className="ki-duotone ki-black-left fs-2 text-gray-800"></i>
							</Link>
						</div>
					</div>
					<div className="py-20">
						<form noValidate="novalidate" className="form w-100" onSubmit={handleSubmit}>
							<div className="text-start mb-10">
								<h1 className="text-dark mb-3 fs-3x" data-kt-translate="password-reset-title">
									Forgot Password
								</h1>
								<div className="text-gray-400 fw-semibold fs-6" data-kt-translate="password-reset-desc">
									Please enter your email address and we will send you a link to reset your password.
								</div>
							</div>
							<div className="fv-row mb-10">
								<input
									className="form-control form-control-solid"
									type="email"
									placeholder="Email"
									name="email"
									value={userInput.email}
									onChange={handleInput}
									data-kt-translate="password-reset-input-email"
								/>
							</div>
							<div className="d-flex flex-stack">
								<div className="m-0 w-100">
									<button
										id="kt_password_reset_submit"
										className="btn btn-success me-2 w-100"
										data-kt-translate="password-reset-submit"
										type="submit"
										disabled={spinner === "on"}
										data-kt-indicator={spinner}
									>
										<span className="indicator-label">Send Email</span>
										<span className="indicator-progress">
											Please wait...
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
										</span>
									</button>
								</div>
							</div>

							<div className="m-0 mt-4 text-center">
								<span className="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="password-reset-head-desc">
									Back to
								</span>
								<Link to="/login" className="link-primary fw-bold fs-5" data-kt-translate="password-reset-head-link">
									Sign In
								</Link>
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
			<div className="d-none d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-start bgi-no-repeat align-items-center justify-content-center" style={{background:"#E38853"}}>
				<div className="w-100 text-center d-flex align-items-center justify-content-center flex-column p-5 m-5">
					<img className="img-fluid mt-5 rounded" src="/assets/basketball/banner.jpeg" alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
