import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../../store/redux/auth";
import { registerUserAsync } from "../../../actions/auth";
import { useToast } from "../../../store/hooks/useToast";

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useDispatch();
	const { notify } = useToast();

	const user = useSelector(userLoggedIn);

	return (
		<>
			{user ? (
				<Navigate to="/login" />
			) : (
				<main>
					<section className="breadcrumb__area include-bg text-center pt-95 pb-50">
						<div className="container">
							<div className="row">
								<div className="col-xxl-12"></div>
							</div>
						</div>
					</section>

					<section className="tp-login-area pb-140 p-relative z-index-1 fix">
						<div className="tp-login-shape">
							<img className="tp-login-shape-1" src="assets/img/login/login-shape-1.png" alt="" />
							<img className="tp-login-shape-2" src="assets/img/login/login-shape-2.png" alt="" />
							<img className="tp-login-shape-3" src="assets/img/login/login-shape-3.png" alt="" />
							<img className="tp-login-shape-4" src="assets/img/login/login-shape-4.png" alt="" />
						</div>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-6 col-lg-8">
									<div className="tp-login-wrapper">
										<div className="tp-login-top text-center mb-30">
											<h3 className="tp-login-title">Sign Up Shofy.</h3>
											<p>
												Already have an account?
												<span>
													<Link to="/login">Sign In</Link>
												</span>
											</p>
										</div>
										<form
											noValidate
											className="tp-login-option"
											onSubmit={handleSubmit((data) => {
												dispatch(
													registerUserAsync({
														formData: { email: data.email, password: data.password, name: data.name },
														notify,
													})
												);
											})}
										>
											<div className="tp-login-mail text-center mb-40">
												<p>
													Sign up with <a href="#">Email</a>
												</p>
											</div>
											<div className="tp-login-input-wrapper">
												<div className="tp-login-input-box">
													<div className="tp-login-input">
														<input
															id="name"
															{...register("name", {
																required: "Name is required",
															})}
															type="text"
															placeholder="Shahnewaz Sakil"
														/>
													</div>
													<div className="tp-login-input-title">
														<label htmlFor="name">Your Name</label>
														{errors.name && <p className="text-danger ms-4 mt-2"> {errors?.name?.message}</p>}
													</div>
												</div>
												<div className="tp-login-input-box">
													<div className="tp-login-input">
														<input
															id="email"
															{...register("email", {
																required: "Email is required",
																pattern: {
																	value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
																	message: "Email is not valid",
																},
															})}
															type="email"
															placeholder="shofy@mail.com"
														/>
													</div>
													<div className="tp-login-input-title">
														<label htmlFor="email">Your Email</label>
														{errors.email && <p className="text-danger ms-4 mt-2"> {errors?.email?.message}</p>}
													</div>
												</div>
												<div className="tp-login-input-box">
													<div className="tp-login-input">
														<input
															id="tp_password"
															{...register("password", {
																required: "Password is required",
																pattern: {
																	value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
																	message: `- at least 8 characters
														- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
														- Can contain special characters`,
																},
															})}
															type="password"
															placeholder="Min. 8 character"
														/>
													</div>
													<div className="tp-login-input-eye" id="password-show-toggle">
														<span id="open-eye" className="open-eye">
															<i className="fa fa-eye"></i>
														</span>
														<span id="close-eye" className="open-close">
															<i className="fa fa-eye-slash"></i>
														</span>
													</div>
													<div className="tp-login-input-title">
														<label htmlFor="tp_password">Password</label>
														{errors.password && (
															<p className="text-danger ms-4 mt-2"> {errors?.password?.message}</p>
														)}
													</div>
												</div>
												<div className="tp-login-input-box">
													<div className="tp-login-input">
														<input
															id="confirmPassword"
															{...register("confirmPassword", {
																required: "Confirm password is required",
																validate: (value, formValues) =>
																	value === formValues.password || "Password must be same",
															})}
															type="password"
															placeholder="Min. 8 character"
														/>
													</div>
													<div className="tp-login-input-eye" id="password-show-toggle">
														<span id="open-eye" className="open-eye">
															<i className="fa fa-eye"></i>
														</span>
														<span id="close-eye" className="open-close">
															<i className="fa fa-eye-slash"></i>
														</span>
													</div>
													<div className="tp-login-input-title">
														<label htmlFor="confirmPassword">Confirm Password</label>
														{errors.confirmPassword && (
															<p className="text-danger ms-4 mt-2"> {errors?.confirmPassword?.message}</p>
														)}
													</div>
												</div>
											</div>
											<div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
												<div className="tp-login-remeber">
													<input id="remeber" type="checkbox" />
													<label htmlFor="remeber">
														I accept the terms of the Service &amp; <a href="#">Privacy Policy</a>.
													</label>
												</div>
											</div>
											<div className="tp-login-bottom">
												<button type="submit" className="tp-login-btn w-100">
													Sign Up
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default Register;
