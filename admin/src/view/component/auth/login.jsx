import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../actions/auth";
import { useToast } from "../../../store/hook/useToast";

const Login = ({ funcShow }) => {
	const [showPass, SetShowPass] = useState(false);
	const [spinner, SetSpinner] = useState("off");
	const dispatch = useDispatch();
	const { notify } = useToast();

	const handleClick = () => {
		SetShowPass(!showPass);
	};

	

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const currentYear = new Date().getFullYear();

	return (
		<div className="d-flex flex-column flex-lg-row flex-column-fluid app-default">
			<a className="d-block d-lg-none  mx-auto py-20">
				<img alt="Logo" src="/assets/basketball/logo.jpeg" className="theme-light-show h-75px" />
			</a>
			<div className="d-flex flex-column flex-column-fluid flex-center w-lg-50 p-10">
				<div className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-450px">
					<div className="d-flex justify-content-start flex-stack py-2">
						<div className="me-2"></div>
						<div className="m-0">
							<span className="text-gray-400 fw-bold fs-5 me-2" data-kt-translate="sign-in-head-desc">
								Not a Member yet?
							</span>
							<Link to="/sign-up" className="link-primary fw-bold fs-5" data-kt-translate="sign-in-head-link">
								Sign Up
							</Link>
						</div>
					</div>
					<div className="py-20">
						<form
							noValidate="novalidate"
							onSubmit={handleSubmit((data) => {
								dispatch(
									loginUser({ formData: { email: data.email, password: data.password, isAdminLogin: true }, notify })
								);
							})}
							className="form w-100"
						>
							<div className="card-body">
								<div className="text-start mb-10">
									<h1 className="text-dark mb-3 fs-3x" data-kt-translate="sign-in-title">
										Welcome back!
									</h1>
									<div className="text-gray-400 fw-semibold fs-6" data-kt-translate="general-desc">
										Please enter your credentials to sign in!
									</div>
								</div>
								<div className="fv-row mb-8">
									<input
										type="text"
										placeholder="Email"
										{...register("email", { required: "Email is required" })}
										className="form-control form-control-solid"
									/>
									{errors.email && <p className="text-danger ms-4 mt-2"> {errors?.email?.message}</p>}
								</div>
								<div className="fv-row mb-7">
									<div className="position-relative mb-3">
										<input
											className="form-control form-control-solid"
											type={showPass ? "text" : "password"}
											placeholder="Password"
											{...register("password", { required: "Password is required" })}
										/>
										<span
											className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
											data-kt-password-meter-control="visibility"
											id="old_password_btn"
										>
											<i
												onClick={handleClick}
												className={`toggle-password bi ${showPass ? "bi-eye" : "bi-eye-slash"} fs-2`}
											/>
										</span>
										{errors.password && <p className="text-danger ms-4 mt-2"> {errors?.password?.message}</p>}
									</div>
								</div>
								<div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-10">
									<div></div>
									<Link to="/forgot-password" className="link-primary" data-kt-translate="sign-in-forgot-password">
										Forgot Password ?
									</Link>
								</div>
								<div className="d-flex flex-stack">
									<button
										type="submit"
										id="kt_sign_in_submit"
										className="btn btn-success me-2 flex-shrink-0"
										disabled={spinner === "on"}
										data-kt-indicator={spinner}
									>
										<span className="indicator-label" data-kt-translate="sign-in-submit">
											Log In
										</span>
										<span className="indicator-progress">
											<span data-kt-translate="general-progress">Please wait...</span>
											<span className="spinner-border spinner-border-sm align-middle ms-2"></span>
										</span>
									</button>
								</div>
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
	);
};

export default Login;
