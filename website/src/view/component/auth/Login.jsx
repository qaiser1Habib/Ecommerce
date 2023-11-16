import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useToast } from "../../../store/hooks/useToast";
import { loginUser } from "../../../actions/auth";
import { userLoggedIn } from "../../../store/redux/auth";

const Login = () => {
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
				<Navigate to="/" />
			) : (
				<main>
					<section className="breadcrumb__area include-bg text-center pt-95 pb-50">
						<div className="container">
							<div className="row"></div>
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
											<h3 className="tp-login-title">Login to Shofy.</h3>
											<p>
												Don’t have an account?{" "}
												<span>
													<Link to="/register">Create a free account</Link>
												</span>
											</p>
										</div>
										<form
											noValidate
											className="tp-login-option"
											onSubmit={handleSubmit((data) => {
												dispatch(loginUser({ formData: { email: data.email, password: data.password }, notify }));
											})}
										>
											<div className="tp-login-mail text-center mb-40">
												<p>
													SignIn with <a href="">Email</a>
												</p>
											</div>
											<div className="tp-login-input-wrapper">
												<div className="tp-login-input-box">
													<div className="tp-login-input">
														<input
															id="email"
															{...register("email", { required: "Email is required" })}
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
															{...register("password", { required: "Password is required" })}
															type="password"
															placeholder="Min. 6 character"
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
											</div>
											<div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
												<div className="tp-login-remeber">
													<input id="remeber" type="checkbox" />
													<label htmlFor="remeber">Remember me</label>
												</div>
												<div className="tp-login-forgot">
													<Link to="/forgotPassword">Forgot Password?</Link>
												</div>
											</div>
											<div className="tp-login-bottom">
												<button type="submit" className="tp-login-btn w-100">
													Login
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

export default Login;
