import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<main>
			<section className="tp-error-area pt-60 pb-60">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8 col-md-10">
							<div className="tp-error-content text-center">
								<div className="tp-error-thumb">
									<img src="assets/img/error/error.png" alt="error" />
								</div>
								<h3 className="tp-error-title">Oops! Page not found</h3>
								<p>Whoops, this is embarassing. Looks like the page you were looking for wasn't found.</p>
								<Link to="/" className="tp-error-btn">
									Back to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ErrorPage;
