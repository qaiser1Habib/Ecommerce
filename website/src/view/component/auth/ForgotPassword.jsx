import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
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
									<h3 className="tp-login-title">Reset Passowrd</h3>
									<p>Enter your email address to request password reset.</p>
								</div>
								<div className="tp-login-option">
									<div className="tp-login-input-wrapper">
										<div className="tp-login-input-box">
											<div className="tp-login-input">
												<input id="email" type="email" placeholder="shofy@mail.com" />
											</div>
											<div className="tp-login-input-title">
												<label htmlFor="email">Your Email</label>
											</div>
										</div>
									</div>
									<div className="tp-login-bottom mb-15">
										<button type="submit" className="tp-login-btn w-100">
											Send Mail
										</button>
									</div>
									<div className="tp-login-suggetions d-sm-flex align-items-center justify-content-center">
										<div className="tp-login-forgot">
											<span>
												Remeber Passowrd? <Link to="/login"> Login</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* login area end */}
		</main>
	);
};

export default ForgotPassword;
