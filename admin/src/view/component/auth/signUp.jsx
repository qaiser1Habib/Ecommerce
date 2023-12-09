import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useToast } from "../../../store/hook/useToast";
import { registerUserAsync } from "../../../actions/auth";

const SignUp = ({ funcShow }) => {
	const [spinner, SetSpinner] = useState("off");
	const [showPass, SetShowPass] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const { notify } = useToast();


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
							<form
								className="form w-100"
								noValidate="novalidate"
								id="kt_sign_up_form"
								onSubmit={handleSubmit((data) => {
									dispatch(
										registerUserAsync({
											formData: { email: data.email, password: data.password, name: data.name, role: "admin" },
											notify,
										})
									);
								})}
							>
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
											placeholder="user name"
											{...register("name", {
												required: "Name is required",
											})}
										/>
										{errors.name && <p className="text-danger ms-4 mt-2"> {errors?.name?.message}</p>}
									</div>
									<div className="col-xl-6 mb-5">
										<input
											className="form-control form-control-lg form-control-solid"
											type="email"
											placeholder="Email"
											{...register("email", {
												required: "Email is required",
												pattern: {
													value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
													message: "Email is not valid",
												},
											})}
										/>
										{errors.email && <p className="text-danger ms-4 mt-2"> {errors?.email?.message}</p>}
									</div>
								</div>

								<div className="fv-row mb-10" data-kt-password-meter="true">
									<div className="mb-1">
										<div className="position-relative mb-3">
											<input
												className="form-control form-control-lg form-control-solid"
												type={showPass ? "text" : "password"}
												placeholder="Password"
												{...register("password", {
													required: "Password is required",
													pattern: {
														value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/gm,
														message: `- at least 4 characters
											- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
											- Can contain special characters`,
													},
												})}
											/>
											{errors.password && <p className="text-danger ms-4 mt-2"> {errors?.password?.message}</p>}

											<span
												className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
												data-kt-password-meter-control="visibility"
											>
												<i
													onClick={() => SetShowPass(!showPass)}
													className={`toggle-password bi ${showPass ? "bi-eye" : "bi-eye-slash"} fs-2`}
												/>
											</span>
										</div>
									</div>
								</div>

								<div className="fv-row mb-10">
									<input
										className="form-control form-control-lg form-control-solid"
										type={showPass ? "text" : "password"}
										placeholder="Confirm Password"
										{...register("confirmPassword", {
											required: "Confirm password is required",
											validate: (value, formValues) => value === formValues.password || "Password must be same",
										})}
									/>
									{errors.confirmPassword && (
										<p className="text-danger ms-4 mt-2"> {errors?.confirmPassword?.message}</p>
									)}
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
